import { readFileSync } from 'fs'

const env = Object.fromEntries(
  readFileSync('.env.local', 'utf8')
    .split('\n')
    .filter(l => l.includes('=') && !l.startsWith('#'))
    .map(l => [l.split('=')[0].trim(), l.split('=').slice(1).join('=').trim()])
)

const BASE_URL = 'https://ferienwohnung-in-der-vulkaneifel.de'

// Sitemap URL prüfen
console.log('🔍 Prüfe Sitemap...')
try {
  const res = await fetch(`${BASE_URL}/sitemap.xml`)
  if (res.ok) {
    const text = await res.text()
    const urls = text.match(/<loc>(.*?)<\/loc>/g)?.length || 0
    console.log(`✅ Sitemap erreichbar: ${urls} URLs gefunden`)
    console.log(`   URL: ${BASE_URL}/sitemap.xml`)
  } else {
    console.log(`❌ Sitemap nicht erreichbar: HTTP ${res.status}`)
  }
} catch (e) {
  console.log(`❌ Sitemap Fehler: ${e.message}`)
}

// robots.txt prüfen
console.log('\n🤖 Prüfe robots.txt...')
try {
  const res = await fetch(`${BASE_URL}/robots.txt`)
  const text = await res.text()
  console.log('✅ robots.txt erreichbar:')
  console.log(text)
} catch (e) {
  console.log(`❌ robots.txt Fehler: ${e.message}`)
}

// Ping Google mit Sitemap
console.log('\n📡 Sende Sitemap-Ping an Google...')
try {
  const pingUrl = `https://www.google.com/ping?sitemap=${encodeURIComponent(BASE_URL + '/sitemap.xml')}`
  const res = await fetch(pingUrl)
  console.log(`✅ Google Ping Status: ${res.status}`)
  if (res.status === 200) {
    console.log('   Google hat die Sitemap erhalten!')
  }
} catch (e) {
  console.log(`⚠️  Google Ping: ${e.message}`)
}

// Ping Bing mit Sitemap
console.log('\n📡 Sende Sitemap-Ping an Bing...')
try {
  const pingUrl = `https://www.bing.com/ping?sitemap=${encodeURIComponent(BASE_URL + '/sitemap.xml')}`
  const res = await fetch(pingUrl)
  console.log(`✅ Bing Ping Status: ${res.status}`)
} catch (e) {
  console.log(`⚠️  Bing Ping: ${e.message}`)
}

console.log('\n📋 NÄCHSTE SCHRITTE FÜR INDEXIERUNG:')
console.log('1. Google Search Console: https://search.console.google.com')
console.log('   → Property hinzufügen: ferienwohnung-in-der-vulkaneifel.de')
console.log('   → Sitemaps → Sitemap einreichen:')
console.log('   → sitemap.xml eingeben → Absenden')
console.log('')
console.log('2. Bing Webmaster Tools: https://www.bing.com/webmasters')
console.log('   → Website hinzufügen → Sitemap URL eingeben')
console.log('')
console.log('3. Google Search Console URL-Inspektion:')
console.log('   → URL eingeben → Indexierung beantragen')
console.log('   → Für Startseite sofort machen!')
