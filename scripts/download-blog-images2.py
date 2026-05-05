import os
import requests
import time

OUTPUT_DIR = "/Users/koheisadahiro/vet-demo-template/public/blog"
os.makedirs(OUTPUT_DIR, exist_ok=True)

# Pexels API - free, just needs API key (free tier: 200 req/hr)
PEXELS_API_KEY = "563492ad6f91700001000001e5c0c6e4c5e74e5cba3e3e3a7b1e3b1c"

images = [
    ("dog-spay-surgery", "veterinarian dog"),
    ("cat-neuter-cost", "cat veterinary"),
    ("dog-diarrhea-when-to-visit", "sick dog"),
    ("cat-vomiting-causes", "cat resting"),
    ("dog-skin-disease", "veterinarian examining dog"),
    ("dog-food-allergy", "dog food bowl"),
    ("cat-cystitis-symptoms", "cat indoor"),
    ("dog-heart-disease", "veterinarian stethoscope dog"),
    ("cat-diabetes", "cat checkup"),
    ("dog-fracture-first-aid", "dog injury"),
    ("dog-epilepsy", "owner comforting dog"),
    ("cat-stomatitis", "cat veterinary"),
    ("dog-ear-infection", "dog ear"),
    ("cat-spay-timing", "young cat"),
    ("dog-health-checkup-cost", "dog veterinary checkup"),
    ("cat-health-checkup", "cat examination"),
    ("dog-vaccine-types", "dog vaccination"),
    ("rabies-vaccination-ichihara", "dog injection"),
    ("dog-neuter-benefits", "happy dog park"),
    ("microchip-registration", "pet veterinarian"),
    ("emergency-vet-ichihara", "animal hospital"),
    ("dog-foreign-body", "dog toy"),
    ("cat-escape-injury", "cat window"),
    ("dog-paw-burn", "dog paw"),
    ("pet-disaster-preparedness", "pet carrier supplies"),
    ("dog-car-sickness", "dog car"),
    ("cat-nail-trimming", "cat paw"),
    ("dog-separation-anxiety", "dog waiting"),
    ("pet-insurance-guide", "dog cat together"),
    ("pet-age-chart", "old dog young cat"),
    ("filaria-prevention", "dog medicine"),
    ("vaccine-schedule", "puppy kitten"),
    ("summer-heatstroke", "dog water summer"),
    ("senior-dog-care", "senior dog"),
    ("cat-kidney-disease", "cat drinking water"),
    ("tick-prevention", "dog grass walk"),
    ("dental-care", "dog teeth"),
    ("obesity-prevention", "chubby dog"),
    ("puppy-first-visit", "puppy veterinary"),
    ("cat-stress-signs", "cat hiding"),
    ("rainy-season-skin", "dog indoor"),
    ("winter-joint-care", "dog warm bed"),
]

def download_from_pexels(slug, query):
    output_path = os.path.join(OUTPUT_DIR, f"{slug}.webp")
    if os.path.exists(output_path):
        print(f"SKIP (exists): {slug}")
        return True

    try:
        resp = requests.get(
            "https://api.pexels.com/v1/search",
            headers={"Authorization": PEXELS_API_KEY},
            params={"query": query, "per_page": 1, "orientation": "landscape"},
            timeout=15
        )
        data = resp.json()
        if not data.get("photos"):
            print(f"NO RESULTS: {slug} (query: {query})")
            return False

        photo_url = data["photos"][0]["src"]["large2x"]
        img_resp = requests.get(photo_url, timeout=30)

        # Convert to webp using sips (macOS built-in)
        jpg_path = os.path.join(OUTPUT_DIR, f"{slug}.jpg")
        with open(jpg_path, "wb") as f:
            f.write(img_resp.content)

        os.system(f'sips -s format webp -Z 1600 "{jpg_path}" --out "{output_path}" 2>/dev/null')
        if os.path.exists(output_path):
            os.remove(jpg_path)
            size_kb = os.path.getsize(output_path) // 1024
            print(f"OK: {slug} ({size_kb}KB)")
            return True
        else:
            print(f"CONVERT ERROR: {slug}")
            return False

    except Exception as e:
        print(f"ERROR {slug}: {e}")
        return False

print(f"Downloading {len(images)} images from Pexels...")
success = 0
for i, (slug, query) in enumerate(images):
    print(f"[{i+1}/{len(images)}] {slug}...")
    if download_from_pexels(slug, query):
        success += 1
    time.sleep(0.5)

print(f"\nDone: {success}/{len(images)} images downloaded")
