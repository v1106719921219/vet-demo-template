import os
import requests
import time

OUTPUT_DIR = "/Users/koheisadahiro/vet-demo-template/public/blog"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# "dog" = use dog.ceo, "cat" = use thecatapi, "pet" = alternate
images = [
    ("dog-spay-surgery", "dog"),
    ("cat-neuter-cost", "cat"),
    ("dog-diarrhea-when-to-visit", "dog"),
    ("cat-vomiting-causes", "cat"),
    ("dog-skin-disease", "dog"),
    ("dog-food-allergy", "dog"),
    ("cat-cystitis-symptoms", "cat"),
    ("dog-heart-disease", "dog"),
    ("cat-diabetes", "cat"),
    ("dog-fracture-first-aid", "dog"),
    ("dog-epilepsy", "dog"),
    ("cat-stomatitis", "cat"),
    ("dog-ear-infection", "dog"),
    ("cat-spay-timing", "cat"),
    ("dog-health-checkup-cost", "dog"),
    ("cat-health-checkup", "cat"),
    ("dog-vaccine-types", "dog"),
    ("rabies-vaccination-ichihara", "dog"),
    ("dog-neuter-benefits", "dog"),
    ("microchip-registration", "dog"),
    ("emergency-vet-ichihara", "cat"),
    ("dog-foreign-body", "dog"),
    ("cat-escape-injury", "cat"),
    ("dog-paw-burn", "dog"),
    ("pet-disaster-preparedness", "dog"),
    ("dog-car-sickness", "dog"),
    ("cat-nail-trimming", "cat"),
    ("dog-separation-anxiety", "dog"),
    ("pet-insurance-guide", "cat"),
    ("pet-age-chart", "dog"),
    ("filaria-prevention", "dog"),
    ("vaccine-schedule", "cat"),
    ("summer-heatstroke", "dog"),
    ("senior-dog-care", "dog"),
    ("cat-kidney-disease", "cat"),
    ("tick-prevention", "dog"),
    ("dental-care", "dog"),
    ("obesity-prevention", "dog"),
    ("puppy-first-visit", "dog"),
    ("cat-stress-signs", "cat"),
    ("rainy-season-skin", "dog"),
    ("winter-joint-care", "dog"),
]

def get_dog_image_url():
    resp = requests.get("https://dog.ceo/api/breeds/image/random", timeout=10)
    return resp.json()["message"]

def get_cat_image_url():
    resp = requests.get("https://api.thecatapi.com/v1/images/search", timeout=10)
    return resp.json()[0]["url"]

def download_and_convert(slug, animal_type):
    output_path = os.path.join(OUTPUT_DIR, f"{slug}.webp")
    if os.path.exists(output_path):
        print(f"SKIP (exists): {slug}")
        return True

    try:
        if animal_type == "cat":
            url = get_cat_image_url()
        else:
            url = get_dog_image_url()

        img_resp = requests.get(url, timeout=30)
        if img_resp.status_code != 200:
            print(f"ERROR {slug}: HTTP {img_resp.status_code}")
            return False

        # Determine extension from URL
        ext = url.split(".")[-1].split("?")[0].lower()
        if ext not in ("jpg", "jpeg", "png", "gif", "webp"):
            ext = "jpg"

        tmp_path = os.path.join(OUTPUT_DIR, f"{slug}_tmp.{ext}")
        with open(tmp_path, "wb") as f:
            f.write(img_resp.content)

        # Convert to webp and resize to 1600px wide using sips (macOS)
        os.system(f'sips -s format webp -Z 1600 "{tmp_path}" --out "{output_path}" 2>/dev/null')

        if os.path.exists(output_path):
            os.remove(tmp_path)
            size_kb = os.path.getsize(output_path) // 1024
            print(f"OK: {slug} ({size_kb}KB)")
            return True
        else:
            # If sips fails for webp, just keep as jpg
            os.rename(tmp_path, output_path)
            print(f"OK (fallback): {slug}")
            return True

    except Exception as e:
        print(f"ERROR {slug}: {e}")
        # cleanup
        for f in [os.path.join(OUTPUT_DIR, f"{slug}_tmp.{ext}") for ext in ["jpg","png","gif"]]:
            if os.path.exists(f):
                os.remove(f)
        return False

print(f"Downloading {len(images)} images...")
success = 0
for i, (slug, animal_type) in enumerate(images):
    print(f"[{i+1}/{len(images)}] {slug} ({animal_type})...")
    if download_and_convert(slug, animal_type):
        success += 1
    time.sleep(0.3)

print(f"\nDone: {success}/{len(images)} images downloaded")
