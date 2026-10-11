# Copy Generated Editorial Images into public/images/
$BrainDir = "C:\Users\DELL\.gemini\antigravity-ide\brain\e5d840a1-713b-4f33-917a-c620a0f010fb"
$PublicImgDir = "$PSScriptRoot\..\public\images"
$GalleryDir = "$PublicImgDir\gallery"

New-Item -ItemType Directory -Force -Path $PublicImgDir | Out-Null
New-Item -ItemType Directory -Force -Path $GalleryDir | Out-Null

$Files = @{
    ".user_uploaded\media_1791705352682.jpg" = "$PublicImgDir\profile.jpg"
    "about_author_1791703147817.jpg"    = "$PublicImgDir\about.jpg"
    "reporting_investigation_1791703166294.jpg" = "$PublicImgDir\reporting-01.jpg"
    "reporting_interview_1791703222400.jpg"     = "$PublicImgDir\reporting-02.jpg"
    "reporting_climate_1791703252136.jpg"       = "$PublicImgDir\reporting-03.jpg"
    "reporting_summit_1791703274261.jpg"        = "$PublicImgDir\reporting-04.jpg"
    "gallery_portrait_1791703309947.jpg"        = "$GalleryDir\portrait-01.jpg"
    "gallery_field_1791703591453.jpg"           = "$GalleryDir\field-01.jpg"
    "gallery_newsroom_1791703332325.jpg"        = "$GalleryDir\behind-scenes-01.jpg"
}

foreach ($item in $Files.GetEnumerator()) {
    $src = Join-Path $BrainDir $item.Key
    $dst = $item.Value
    if (Test-Path $src) {
        Copy-Item -Path $src -Destination $dst -Force
        Write-Host "Copied $src -> $dst" -ForegroundColor Green
    } else {
        Write-Host "Source file not found: $src" -ForegroundColor Yellow
    }
}

Write-Host "Asset copy complete!" -ForegroundColor Cyan
