import os
import requests
import time

API_KEY = os.environ["OPENAI_API_KEY"]
OUTPUT_DIR = "/Users/koheisadahiro/vet-demo-template/public/blog"
os.makedirs(OUTPUT_DIR, exist_ok=True)

BASE_PROMPT = "動物病院のブログ用アイキャッチ画像。温かみのある明るい写真風イラスト。テキストや文字は一切入れない。"

images = [
    ("dog-spay-surgery", "動物病院で獣医師に優しく抱かれる小型犬、手術前の安心した雰囲気"),
    ("cat-neuter-cost", "動物病院の診察台の上でリラックスしている若い猫"),
    ("dog-diarrhea-when-to-visit", "お腹を気にしている犬を心配そうに見つめる飼い主"),
    ("cat-vomiting-causes", "室内でぐったりしている猫を心配そうに見守る飼い主"),
    ("dog-skin-disease", "獣医師が犬の皮膚を丁寧に診察している様子"),
    ("dog-food-allergy", "健康的なドッグフードと元気な犬が並んでいる明るいキッチン"),
    ("cat-cystitis-symptoms", "猫用トイレの近くで気になる様子の猫"),
    ("dog-heart-disease", "獣医師が聴診器で犬の心臓を聴診している様子"),
    ("cat-diabetes", "動物病院で血液検査を受けている猫"),
    ("dog-fracture-first-aid", "足を包帯で固定された犬が安静にしている様子"),
    ("dog-epilepsy", "飼い主が犬を落ち着かせるように優しく寄り添っている"),
    ("cat-stomatitis", "獣医師が猫の口の中を診察している様子"),
    ("dog-ear-infection", "獣医師が犬の耳を丁寧に検査している"),
    ("cat-spay-timing", "若い猫が動物病院の待合室でキャリーから顔を出している"),
    ("dog-health-checkup-cost", "動物病院で健康診断を受けている元気な犬"),
    ("cat-health-checkup", "獣医師が猫の全身を丁寧に触診している"),
    ("dog-vaccine-types", "獣医師が犬にワクチン注射をしている様子"),
    ("rabies-vaccination-ichihara", "狂犬病予防注射の集合注射会場、犬と飼い主が並んでいる"),
    ("dog-neuter-benefits", "元気に走り回る去勢済みの犬、公園で幸せそう"),
    ("microchip-registration", "獣医師がペットにマイクロチップを装着している様子"),
    ("emergency-vet-ichihara", "夜の動物病院の外観、明かりが灯っている安心感のある雰囲気"),
    ("dog-foreign-body", "おもちゃを咥えている犬、飼い主が注意深く見守っている"),
    ("cat-escape-injury", "窓辺から外を見ている猫、室内の安全な環境"),
    ("dog-paw-burn", "夏の日差しの中、犬の肉球をチェックしている飼い主"),
    ("pet-disaster-preparedness", "ペット用防災グッズ（キャリー、水、フード）が整理されている"),
    ("dog-car-sickness", "車の中で安全にクレートに入っている犬"),
    ("cat-nail-trimming", "飼い主が猫の爪を優しく切っている"),
    ("dog-separation-anxiety", "窓際で飼い主の帰りを待っている犬、少し寂しげだが温かい光"),
    ("pet-insurance-guide", "ペットと書類が並んでいる、犬猫と保険のイメージ"),
    ("pet-age-chart", "シニア犬と子猫が並んでいる、年齢の対比を感じる温かい写真"),
    ("filaria-prevention", "蚊の季節に予防薬を飲んでいる犬"),
    ("vaccine-schedule", "子犬と子猫が一緒に動物病院の待合室にいる"),
    ("summer-heatstroke", "夏の暑い日に日陰で水を飲んでいる犬"),
    ("senior-dog-care", "白髪が混じったシニア犬が穏やかに寝ている"),
    ("cat-kidney-disease", "水をたくさん飲んでいる猫"),
    ("tick-prevention", "草むらを散歩する犬、自然の中での注意喚起"),
    ("dental-care", "犬用歯ブラシと口を開けている犬"),
    ("obesity-prevention", "少しぽっちゃりした犬と体重計"),
    ("puppy-first-visit", "初めて動物病院に来た子犬、キョロキョロしている可愛い様子"),
    ("cat-stress-signs", "隠れ場所からこちらを見ている猫"),
    ("rainy-season-skin", "雨の日に室内でくつろぐ犬、少し体を掻いている"),
    ("winter-joint-care", "暖かいベッドで休んでいるシニア犬"),
]

def generate_image(slug, prompt):
    output_path = os.path.join(OUTPUT_DIR, f"{slug}.webp")
    if os.path.exists(output_path):
        print(f"SKIP (exists): {slug}")
        return True

    full_prompt = f"{BASE_PROMPT} {prompt}"

    try:
        resp = requests.post(
            "https://api.openai.com/v1/images/generations",
            headers={"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"},
            json={
                "model": "dall-e-3",
                "prompt": full_prompt,
                "n": 1,
                "size": "1792x1024",
                "response_format": "url"
            },
            timeout=60
        )
        data = resp.json()

        if "error" in data:
            print(f"ERROR {slug}: {data['error']['message']}")
            return False

        image_url = data["data"][0]["url"]

        # Download image
        img_resp = requests.get(image_url, timeout=60)

        # Save as webp using PIL if available, otherwise save as png and convert
        try:
            from PIL import Image
            from io import BytesIO
            img = Image.open(BytesIO(img_resp.content))
            img.save(output_path, "WEBP", quality=85)
        except ImportError:
            # Fallback: save as png
            png_path = output_path.replace(".webp", ".png")
            with open(png_path, "wb") as f:
                f.write(img_resp.content)
            # Convert with sips (macOS)
            os.system(f'sips -s format webp "{png_path}" --out "{output_path}" 2>/dev/null')
            if os.path.exists(output_path):
                os.remove(png_path)
            else:
                os.rename(png_path, output_path)

        print(f"OK: {slug}")
        return True
    except Exception as e:
        print(f"ERROR {slug}: {e}")
        return False

print(f"Generating {len(images)} images...")
success = 0
for i, (slug, prompt) in enumerate(images):
    print(f"[{i+1}/{len(images)}] {slug}...")
    if generate_image(slug, prompt):
        success += 1
    time.sleep(1)  # Rate limit

print(f"\nDone: {success}/{len(images)} images generated")
