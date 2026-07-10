# Generic static file server for any subfolder in the workspace.
# Usage: powershell -ExecutionPolicy Bypass -File serve-folder.ps1 [port] [folder]
param([int]$Port = 8127, [string]$Folder = 'vineet-uiux-portfolio')

$workspace = Split-Path -Parent $PSScriptRoot   # parent of .claude
$root = Join-Path $workspace $Folder            # serve this subfolder
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$Port/")
$listener.Start()
Write-Host "Serving $root at http://localhost:$Port/"

$mime = @{
  '.html'='text/html; charset=utf-8'; '.css'='text/css; charset=utf-8';
  '.js'='application/javascript; charset=utf-8'; '.json'='application/json';
  '.svg'='image/svg+xml'; '.png'='image/png'; '.jpg'='image/jpeg';
  '.jpeg'='image/jpeg'; '.gif'='image/gif'; '.ico'='image/x-icon';
  '.pdf'='application/pdf'; '.woff'='font/woff'; '.woff2'='font/woff2'
}

while ($listener.IsListening) {
  try {
    $ctx = $listener.GetContext()
  } catch { break }
  $rel = [System.Uri]::UnescapeDataString($ctx.Request.Url.AbsolutePath.TrimStart('/'))
  if ([string]::IsNullOrEmpty($rel)) { $rel = 'index.html' }
  $path = Join-Path $root $rel
  if (Test-Path $path -PathType Leaf) {
    $bytes = [System.IO.File]::ReadAllBytes($path)
    $ext = [System.IO.Path]::GetExtension($path).ToLower()
    if ($mime.ContainsKey($ext)) { $ctx.Response.ContentType = $mime[$ext] }
    $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
  } else {
    $ctx.Response.StatusCode = 404
    $msg = [System.Text.Encoding]::UTF8.GetBytes('Not found')
    $ctx.Response.OutputStream.Write($msg, 0, $msg.Length)
  }
  $ctx.Response.Close()
}
