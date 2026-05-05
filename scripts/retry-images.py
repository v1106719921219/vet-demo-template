import os
import requests

API_KEY = os.environ["OPENAI_API_KEY"]
OUTPUT_DIR = "/Users/koheisadahiro/vet-demo-template/public/blog"

# Safer prompts for the 2 blocked images
images = [
    ("dog-fracture-first-aid", "A small dog resting comfortably on a soft cushion at a veterinary clinic, with a caring veterinarian nearby. Warm, bright, professional photo style illustration. No text or letters."),
    ("cat-stomatitis", "A veterinarian gently holding a calm cat during a routine dental examination at a clean modern clinic. Warm, bright, professional photo style illustration. No text or letters."),
]

for slug, prompt in images:
    output_path = os.path.join(OUTPUT_DIR, f"{slug}.webp")
    print(f"Generating {slug}...")
    try:
        resp = requests.post(
            "https://api.openai.com/v1/images/generations",
            headers={"Authorization": f"Bearer {API_KEY}", "Content-Type": "application/json"},
            json={"model": "dall-e-3", "prompt": prompt, "n": 1, "size": "1792x1024", "response_format": "url"},
            timeout=60
        )
        data = resp.json()
        if "error" in data:
            print(f"  ERROR: {data['error']['message']}")
            continue
        image_url = data["data"][0]["url"]
        img_resp = requests.get(image_url, timeout=60)
        tmp = os.path.join(OUTPUT_DIR, f"{slug}_tmp.png")
        with open(tmp, "wb") as f:
            f.write(img_resp.content)
        os.system(f'sips -s format webp "{tmp}" --out "{output_path}" 2>/dev/null')
        if os.path.exists(output_path):
            os.remove(tmp)
        print(f"  OK: {slug}")
    except Exception as e:
        print(f"  ERROR: {e}")
