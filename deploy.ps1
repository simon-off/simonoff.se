Write-Host "Building site..."
pnpm run build
Copy-Item -r dist public_html

Write-Host "Copying files to server..."
scp -r public_html simonoff:~/
Remove-Item -r public_html
