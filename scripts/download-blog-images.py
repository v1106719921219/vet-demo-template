import os
import requests
import time

OUTPUT_DIR = "/Users/koheisadahiro/vet-demo-template/public/blog"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Unsplash source - free, no API key needed
# Each entry: (slug, search_query)
images = [
    ("dog-spay-surgery", "veterinarian dog clinic"),
    ("cat-neuter-cost", "cat veterinary clinic"),
    ("dog-diarrhea-when-to-visit", "sick dog owner worried"),
    ("cat-vomiting-causes", "cat resting indoor"),
    ("dog-skin-disease", "veterinarian examining dog"),
    ("dog-food-allergy", "dog food bowl healthy"),
    ("cat-cystitis-symptoms", "cat litter box"),
    ("dog-heart-disease", "veterinarian stethoscope dog"),
    ("cat-diabetes", "cat veterinary checkup"),
    ("dog-fracture-first-aid", "dog bandage injury"),
    ("dog-epilepsy", "owner comforting dog"),
    ("cat-stomatitis", "cat mouth veterinary"),
    ("dog-ear-infection", "dog ear check veterinarian"),
    ("cat-spay-timing", "young cat carrier"),
    ("dog-health-checkup-cost", "dog health checkup veterinary"),
    ("cat-health-checkup", "cat examination veterinarian"),
    ("dog-vaccine-types", "dog vaccination injection"),
    ("rabies-vaccination-ichihara", "dog vaccination outdoor"),
    ("dog-neuter-benefits", "happy dog running park"),
    ("microchip-registration", "veterinarian pet microchip"),
    ("emergency-vet-ichihara", "animal hospital night"),
    ("dog-foreign-body", "dog chewing toy"),
    ("cat-escape-injury", "cat looking window indoor"),
    ("dog-paw-burn", "dog paw check summer"),
    ("pet-disaster-preparedness", "pet emergency kit supplies"),
    ("dog-car-sickness", "dog car travel crate"),
    ("cat-nail-trimming", "cat nail clipping"),
    ("dog-separation-anxiety", "dog waiting window"),
    ("pet-insurance-guide", "pet dog cat family"),
    ("pet-age-chart", "senior dog puppy together"),
    ("filaria-prevention", "dog medicine prevention"),
    ("vaccine-schedule", "puppy kitten together cute"),
    ("summer-heatstroke", "dog drinking water summer"),
    ("senior-dog-care", "senior old dog resting"),
    ("cat-kidney-disease", "cat drinking water bowl"),
    ("tick-prevention", "dog walking grass nature"),
    ("dental-care", "dog teeth brushing dental"),
    ("obesity-prevention", "chubby dog scale weight"),
    ("puppy-first-visit", "puppy first veterinary visit"),
    ("cat-stress-signs", "cat hiding shy"),
    ("rainy-season-skin", "dog indoor rainy day"),
    ("winter-joint-care", "senior dog warm bed winter"),
]

def download_image(slug, query):
    output_path = os.path.join(OUTPUT_DIR, f"{slug}.webp")
    if os.path.exists(output_path):
        print(f"SKIP (exists): {slug}")
        return True

    try:
        # Use Unsplash source for random relevant photo (1792x1024 for 16:9-ish)
        url = f"https://source.unsplash.com/1600x900/?{query.replace(' ', ',')}"
        resp = requests.get(url, timeout=30, allow_redirects=True)

        if resp.status_code != 200:
            print(f"ERROR {slug}: HTTP {resp.status_code}")
            return False

        # Save and convert to webp
        try:
            from PIL import Image
            from io import BytesIO
            img = Image.open(BytesIO(resp.content))
            img = img.convert("RGB")
            img.save(output_path, "WEBP", quality=85)
        except ImportError:
            # Fallback: save as jpg then convert with sips
            jpg_path = output_path.replace(".webp", ".jpg")
            with open(jpg_path, "wb") as f:
                f.write(resp.content)
            os.system(f'sips -s format webp "{jpg_path}" --out "{output_path}" 2>/dev/null')
            if os.path.exists(output_path):
                os.remove(jpg_path)
            else:
                os.rename(jpg_path, output_path)

        size_kb = os.path.getsize(output_path) // 1024
        print(f"OK: {slug} ({size_kb}KB)")
        return True
    except Exception as e:
        print(f"ERROR {slug}: {e}")
        return False

print(f"Downloading {len(images)} images from Unsplash...")
success = 0
for i, (slug, query) in enumerate(images):
    print(f"[{i+1}/{len(images)}] {slug}...")
    if download_image(slug, query):
        success += 1
    time.sleep(0.5)

print(f"\nDone: {success}/{len(images)} images downloaded")
