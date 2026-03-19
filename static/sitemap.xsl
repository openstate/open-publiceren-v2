<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="2.0"
  xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
  xmlns:sitemap="http://www.sitemaps.org/schemas/sitemap/0.9">
  <xsl:output method="html" encoding="UTF-8" indent="yes"/>
  <xsl:template match="/">
    <xsl:variable name="afterProtocol" select="substring-after(sitemap:urlset/sitemap:url[1]/sitemap:loc, '://')"/>
    <xsl:variable name="host" select="substring-before(concat($afterProtocol, '/'), '/')"/>
    <html lang="nl">
      <head>
        <title>Sitemap voor
          <xsl:value-of select="$host"/>
        </title>
        <style>
          body { font-family: system-ui, sans-serif; max-width: 60rem; margin: 2rem auto; padding: 0 1rem; color: #1a1a1a; }
          h1 { font-size: 1.5rem; }
          p { color: #555; }
          table { width: 100%; border-collapse: collapse; margin-top: 1rem; }
          th, td { text-align: left; padding-block: .5rem; border-bottom: 1px solid #e5e5e5; }
          th { font-size: .875rem; color: #555; }
          a { color: #1a73e8; text-decoration: none; }
          a:hover { text-decoration: underline; }
        </style>
      </head>
      <body>
        <h1>Sitemap voor
          <xsl:value-of select="$host"/>
        </h1>
        <table>
          <tr>
            <th>URL</th>
          </tr>
          <xsl:for-each select="sitemap:urlset/sitemap:url">
            <tr>
              <td>
                <a href="{sitemap:loc}">
                  <xsl:value-of select="sitemap:loc"/>
                </a>
              </td>
            </tr>
          </xsl:for-each>
        </table>
      </body>
    </html>
  </xsl:template>
</xsl:stylesheet>