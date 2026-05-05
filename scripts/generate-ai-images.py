import os
import requests
import time
import urllib.parse

OUTPUT_DIR = "/Users/koheisadahiro/vet-demo-template/public/blog"
os.makedirs(OUTPUT_DIR, exist_ok=True)

BASE = "Warm, bright, professional veterinary clinic photo style illustration. No text or letters. 16:9 aspect ratio."

images = [
    ("dog-spay-surgery", "A small dog being gently held by a veterinarian in a clean bright clinic, before surgery, calm and reassuring atmosphere"),
    ("cat-neuter-cost", "A young cat sitting calmly on an examination table at a veterinary clinic, gentle lighting"),
    ("dog-diarrhea-when-to-visit", "A concerned pet owner kneeling beside their dog who looks unwell, indoor home setting, warm tones"),
    ("cat-vomiting-causes", "A cat resting on a soft blanket indoors, looking slightly unwell, owner watching with concern"),
    ("dog-skin-disease", "A veterinarian carefully examining a dog's skin and fur with a magnifying tool, clinic setting"),
    ("dog-food-allergy", "A happy dog next to a bowl of healthy premium dog food in a bright clean kitchen"),
    ("cat-cystitis-symptoms", "A cat near a litter box looking uncomfortable, clean modern home interior"),
    ("dog-heart-disease", "A veterinarian using a stethoscope to listen to a dog's heart, professional clinic setting"),
    ("cat-diabetes", "A veterinarian performing a blood test on a calm cat at a clinic, medical equipment visible"),
    ("dog-fracture-first-aid", "A dog with a bandaged leg resting on a comfortable bed, recovering from injury, warm lighting"),
    ("dog-epilepsy", "A caring pet owner gently comforting and holding their dog on the floor, warm home interior"),
    ("cat-stomatitis", "A veterinarian carefully examining a cat's mouth and teeth at a clinic"),
    ("dog-ear-infection", "A veterinarian gently examining a dog's ear with an otoscope, clean clinic setting"),
    ("cat-spay-timing", "A young cute cat peeking out from a pet carrier in a veterinary waiting room"),
    ("dog-health-checkup-cost", "A healthy happy dog being examined by a friendly veterinarian during a checkup, bright clinic"),
    ("cat-health-checkup", "A veterinarian gently palpating and examining a calm cat on an exam table"),
    ("dog-vaccine-types", "A veterinarian giving a vaccination injection to a calm dog, professional setting"),
    ("rabies-vaccination-ichihara", "Dogs and their owners lined up at an outdoor vaccination event, sunny day, community setting"),
    ("dog-neuter-benefits", "A happy energetic dog running joyfully in a green park on a sunny day"),
    ("microchip-registration", "A veterinarian implanting a microchip into a pet using a small device, close-up clinical shot"),
    ("emergency-vet-ichihara", "An animal hospital building exterior at night with warm lights glowing from windows, reassuring"),
    ("dog-foreign-body", "A playful dog with a toy in its mouth, owner watching carefully, living room setting"),
    ("cat-escape-injury", "A cat sitting safely on a windowsill looking outside through a screen, secure indoor environment"),
    ("dog-paw-burn", "A pet owner checking their dog's paw pads on a hot summer day, asphalt visible in background"),
    ("pet-disaster-preparedness", "Emergency pet supplies neatly organized: carrier, water bottles, food cans, leash, first aid kit"),
    ("dog-car-sickness", "A calm dog sitting safely inside a travel crate in a car, ready for a trip"),
    ("cat-nail-trimming", "A person gently trimming a calm cat's nails with pet nail clippers, close-up"),
    ("dog-separation-anxiety", "A dog sitting by a window looking outside waiting for owner, warm afternoon light, slightly melancholic"),
    ("pet-insurance-guide", "A happy dog and cat sitting together with their owner reviewing documents at a table"),
    ("pet-age-chart", "A senior gray-muzzled dog and a young kitten sitting side by side, contrasting ages, warm photo"),
    ("filaria-prevention", "A dog taking a chewable medicine tablet from owner's hand, prevention medication, bright setting"),
    ("vaccine-schedule", "An adorable puppy and kitten sitting together in a veterinary waiting room, cute"),
    ("summer-heatstroke", "A dog drinking water from a bowl in the shade on a hot summer day, panting"),
    ("senior-dog-care", "An old senior dog with gray fur resting peacefully on a comfortable cushion, warm lighting"),
    ("cat-kidney-disease", "A cat drinking water from a water fountain bowl, hydration focus, clean modern home"),
    ("tick-prevention", "A dog walking through tall grass in nature, owner visible, outdoor spring setting"),
    ("dental-care", "A dog with mouth open showing clean teeth, with a pet toothbrush nearby, dental care theme"),
    ("obesity-prevention", "A slightly overweight chubby dog standing on a pet scale, veterinary clinic, humorous but caring"),
    ("puppy-first-visit", "A tiny curious puppy at a veterinary clinic for the first time, looking around wide-eyed"),
    ("cat-stress-signs", "A shy cat hiding partially behind furniture, peeking out cautiously, soft indoor lighting"),
    ("rainy-season-skin", "A dog indoors on a rainy day, slightly scratching itself, humid atmosphere visible through window"),
    ("winter-joint-care", "A senior dog curled up on a warm heated bed in winter, cozy blankets, warm tones"),
]

def generate_image(slug, prompt):
    output_path = os.path.join(OUTPUT_DIR, f"{slug}.webp")

    full_prompt = f"{BASE} {prompt}"
    encoded = urllib.parse.quote(full_prompt)
    url = f"https://image.pollinations.ai/prompt/{encoded}?width=1600&height=900&nologo=true&seed={hash(slug) % 10000}"

    try:
        resp = requests.get(url, timeout=120)
        if resp.status_code != 200:
            print(f"ERROR {slug}: HTTP {resp.status_code}")
            return False

        # Save as tmp jpg first
        tmp_path = os.path.join(OUTPUT_DIR, f"{slug}_tmp.jpg")
        with open(tmp_path, "wb") as f:
            f.write(resp.content)

        # Convert to webp with sips
        os.system(f'sips -s format webp -Z 1600 "{tmp_path}" --out "{output_path}" 2>/dev/null')

        if os.path.exists(output_path):
            os.remove(tmp_path)
            size_kb = os.path.getsize(output_path) // 1024
            print(f"OK: {slug} ({size_kb}KB)")
            return True
        else:
            os.rename(tmp_path, output_path)
            size_kb = os.path.getsize(output_path) // 1024
            print(f"OK (jpg): {slug} ({size_kb}KB)")
            return True

    except Exception as e:
        print(f"ERROR {slug}: {e}")
        return False

print(f"Generating {len(images)} AI images via Pollinations.ai...")
success = 0
for i, (slug, prompt) in enumerate(images):
    print(f"[{i+1}/{len(images)}] {slug}...")
    if generate_image(slug, prompt):
        success += 1
    time.sleep(1)

print(f"\nDone: {success}/{len(images)} images generated")
