$env:NODE_OPTIONS="--openssl-legacy-provider"
Write-Host "Instalacija zavisnosti sa NODE_OPTIONS=--openssl-legacy-provider..."
yarn install
if ($LASTEXITCODE -eq 0) {
    Write-Host ""
    Write-Host "Instalacija uspesna! Sada mozete pokrenuti projekat sa: yarn dev"
} else {
    Write-Host ""
    Write-Host "Instalacija nije uspela. Proverite greske iznad."
}

