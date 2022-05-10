const puppeteer = require('puppeteer')

async function scrape() {
    const browser = await puppeteer.launch({})
    const page = await browser.newPage()
 
    // Alior
    await page.goto('https://www.aliorbank.pl/klienci-indywidualni/kredyty-hipoteczne/kredyt-z-okresowo-stala-stopa-oprocentowania')
    let element = await page.waitForSelector("div.flex-medium-3:nth-child(1) > article:nth-child(1) > div:nth-child(2) > div:nth-child(1) > strong:nth-child(1)")
    let value = await page.evaluate(element => element.textContent, element)

    console.log(`Alior: ${value}`)

    // ING
    await page.goto('https://www.ing.pl/indywidualni/kredyty-i-pozyczki/kredyt-hipoteczny/oferty-i-oprocentowanie-stale')
    element = await page.waitForSelector("#centerMe > thead > tr > th:nth-child(2) > p:nth-child(1) > span")
    let offerName = await page.evaluate(element => element.textContent, element)

    console.log('\n-- ING --')
    console.log(`\n${offerName}`)

    element = await page.waitForSelector("#centerMe > tbody > tr:nth-child(1) > td:nth-child(2) > p:nth-child(1) > strong > span > span")
    value =  await page.evaluate(element => element.textContent, element)
    console.log(`   Łatwy start: ${value}`)

    element = await page.waitForSelector("#centerMe > tbody > tr:nth-child(1) > td:nth-child(2) > p:nth-child(2) > span > strong")
    value =  await page.evaluate(element => element.textContent, element)
    console.log(`   Lekka rata:  ${value}`)

    // -------------------------------------------------------------------------

    element = await page.waitForSelector("#centerMe > thead > tr > th:nth-child(3) > p:nth-child(1) > span")
    offerName =  await page.evaluate(element => element.textContent, element)
    console.log(`\n ${offerName}`)
    
    element = await page.waitForSelector("#centerMe > tbody > tr:nth-child(1) > td:nth-child(3) > p:nth-child(1) > strong > span > span")
    value =  await page.evaluate(element => element.textContent, element)
    console.log(`   Łatwy start: ${value}`)

    element = await page.waitForSelector("#centerMe > tbody > tr:nth-child(1) > td:nth-child(3) > p:nth-child(2) > span > strong")
    value =  await page.evaluate(element => element.textContent, element)
    console.log(`   Lekka rata:  ${value}`)
    
    // -------------------------------------------------------------------------
    
    element = await page.waitForSelector("#centerMe > thead > tr > th:nth-child(4) > p:nth-child(1) > span > span")
    offerName =  await page.evaluate(element => element.textContent, element)

    element = await page.waitForSelector("#centerMe > tbody > tr:nth-child(1) > td:nth-child(4) > strong > span")
    value =  await page.evaluate(element => element.textContent, element)
    console.log(`\n ${offerName}:${value}`)

    element = await page.waitForSelector("#centerMe > tbody > tr:nth-child(1) > td:nth-child(5) > p:nth-child(1) > strong > span > span")
    value =  await page.evaluate(element => element.textContent, element)
    console.log(`   Łatwy start: ${value}`)

    element = await page.waitForSelector("#centerMe > tbody > tr:nth-child(1) > td:nth-child(5) > p:nth-child(2) > span > span > strong")
    value =  await page.evaluate(element => element.textContent, element)
    console.log(`   Lekka rata:  ${value}`)
    
    // -------------------------------------------------------------------------

    element = await page.waitForSelector("#centerMe > thead > tr > th:nth-child(7) > p:nth-child(1) > span")
    offerName =  await page.evaluate(element => element.textContent, element)

    element = await page.waitForSelector("#centerMe > tbody > tr:nth-child(1) > td:nth-child(7) > strong > span")
    value =  await page.evaluate(element => element.textContent, element)
    console.log(`\n ${offerName}: ${value}`)
    console.log('\n---------')

    // PKOBP
    await page.goto('https://www.pkobp.pl/waluty/')
    element = await page.waitForSelector("#base_rate > p")
    value = await page.evaluate(element => element.textContent, element)
    console.log('\n PKOBP SSB: ' + value)

    // BOŚ
    await page.goto('https://www.bosbank.pl/klient-indywidualny/pozyczki-i-kredyty/kredyty-i-pozyczki-hipoteczne/kredyt-hipoteczny')
    element = await page.waitForSelector("#collapsible-04 > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > p")
    offerName = await page.evaluate(element => element.textContent, element)

    element = await page.waitForSelector("#collapsible-04 > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > p")
    value =  await page.evaluate(element => element.textContent, element)

    console.log('\n-- BOŚ --')
    console.log(`\n ${offerName}: ${value}`)

    element = await page.waitForSelector("#collapsible-04 > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > p")
    offerName = await page.evaluate(element => element.textContent, element)

    element = await page.waitForSelector("#collapsible-04 > div > table > tbody > tr:nth-child(2) > td:nth-child(3) > p")
    value =  await page.evaluate(element => element.textContent, element)

    console.log(`\n ${offerName}: ${value}`)

    browser.close()
 }

 scrape()
 