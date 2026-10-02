from pathlib import Path
from PIL import Image, ImageOps

root = Path(__file__).resolve().parents[1]
images = root / 'assets' / 'images'
for name in ['silver-hand-3-4', 'card-escolhido-3-4', 'card-perfume', 'card-pao', 'card-noite', 'card-beijo', 'card-aparte']:
    with Image.open(images / (name + '.png')) as image:
        image.convert('RGB').save(images / (name + '.webp'), 'WEBP', quality=82, method=6)
with Image.open(images / 'hero-background-plate.png') as image:
    ImageOps.fit(image.convert('RGB'), (1200, 630)).save(images / 'social-card.jpg', quality=88, optimize=True)
print('Optimized seven illustrations and created a 1200 x 630 social image')
