#!/usr/bin/env python3
"""Duyarlı (responsive) görsel varyantları üretir.

Kaynak: src/assets/*.webp  ->  src/assets/rw/<ad>-<genislik>.avif|.webp
Kadraj, renk ve doygunluk değiştirilmez; yalnızca fiziksel boyut küçültülür.
"""
import os
import glob
from PIL import Image

SRC = "src/assets"
OUT = os.path.join(SRC, "rw")
WIDTHS = [360, 480, 640, 768, 960, 1200, 1600]
SKIP = {"logo", "logo-footer", "favicon"}

os.makedirs(OUT, exist_ok=True)


def main():
    total_before = 0
    total_after = 0
    for path in sorted(glob.glob(os.path.join(SRC, "*.webp"))):
        name = os.path.splitext(os.path.basename(path))[0]
        if name in SKIP:
            continue
        im = Image.open(path).convert("RGB")
        w0, h0 = im.size
        total_before += os.path.getsize(path)
        widths = [w for w in WIDTHS if w < w0] + [w0]
        for w in widths:
            h = max(1, round(h0 * w / w0))
            resized = im.resize((w, h), Image.LANCZOS)
            for ext, kwargs in (
                ("webp", dict(quality=74, method=6)),
                ("avif", dict(quality=52)),
            ):
                out = os.path.join(OUT, f"{name}-{w}.{ext}")
                resized.save(out, **kwargs)
                total_after += os.path.getsize(out)
        print(name, w0, "->", widths)
    print(f"kaynak {total_before/1024:.0f} KB, tüm varyantlar {total_after/1024:.0f} KB")


if __name__ == "__main__":
    main()
