const puppeteer = require('puppeteer')

scrape()

async function scrape() {
    const browser = await puppeteer.launch({})
    const page = await browser.newPage()
 
    // Alior
    await getAlior(page)

    // ING
    await getING(page)

    // PKOBP
    await getPKOBP(page)

    // BOŚ
    await getBOS(page)

    browser.close()
 }
 
 async function getAlior(page) {
     try {
         await page.goto('https://www.aliorbank.pl/klienci-indywidualni/kredyty-hipoteczne/kredyt-z-okresowo-stala-stopa-oprocentowania')
         let element = await page.waitForSelector("div.flex-medium-3:nth-child(1) > article:nth-child(1) > div:nth-child(2) > div:nth-child(1) > strong:nth-child(1)")
         let value = await page.evaluate(element => element.textContent, element)
         console.log(`Alior: ${value}`)
     } catch (e) {
        console.log(e)
     }
 }

 async function getING(page) {
    try {
        await page.goto('https://www.ing.pl/indywidualni/kredyty-i-pozyczki/kredyt-hipoteczny/oferty-i-oprocentowanie-stale')
        let element = await page.waitForSelector("#centerMe > thead > tr > th:nth-child(2) > p:nth-child(1) > span")
        let offerName = await page.evaluate(element => element.textContent, element)
    
        console.log('\n-- ING --')
        console.log(`\n${offerName}`)
    
        element = await page.waitForSelector("#centerMe > tbody > tr:nth-child(1) > td:nth-child(2) > p:nth-child(1) > strong > span > span")
        let value =  await page.evaluate(element => element.textContent, element)
        console.log(`   Łatwy start: ${value}`)
    
        element = await page.waitForSelector("#centerMe > tbody > tr:nth-child(1) > td:nth-child(2) > p:nth-child(2) > span > strong")
        value =  await page.evaluate(element => element.textContent, element)
        console.log(`   Lekka rata:  ${value}`)
    
        // 2nd PROMOTION OFFER

        // UNCOMMENT IF YOU'RE WILLING TO GET DATA ABOUT THE OLDER PROMOTION (IF IT'S PRESENT)
        // try {
        //     element = await page.waitForSelector("#centerMe > thead > tr > th:nth-child(3) > p:nth-child(1) > span")
        //     offerName =  await page.evaluate(element => element.textContent, element)
        //     console.log(`\n ${offerName}`)
            
        //     element = await page.waitForSelector("#centerMe > tbody > tr:nth-child(1) > td:nth-child(3) > p:nth-child(1) > strong > span > span")
        //     value =  await page.evaluate(element => element.textContent, element)
        //     console.log(`   Łatwy start: ${value}`)
        
        //     element = await page.waitForSelector("#centerMe > tbody > tr:nth-child(1) > td:nth-child(3) > p:nth-child(2) > span > strong")
        //     value =  await page.evaluate(element => element.textContent, element)
        //     console.log(`   Lekka rata:  ${value}`)
        // } catch (e) {
        //     console.log('\n Promocyjna oferta:')
        //     console.log('   Sprawdź czy ING nie wycofowało tej oferty!')
        // }
        
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
    } catch (e) {
        console.log('ING: ERROR')
    }
 }

 async function getPKOBP(page) {
    try {
         await page.goto('https://www.pkobp.pl/waluty/')
         let element = await page.waitForSelector("#base_rate > p")
         let value = await page.evaluate(element => element.textContent, element)
         console.log('\nPKOBP SSB: ' + value)
    } catch (e) {
        console.log('\nPKOBP SSB: ' + 'ERROR')
    }
 }

 async function getBOS(page) {
    try {
        await page.goto('https://www.bosbank.pl/klient-indywidualny/pozyczki-i-kredyty/kredyty-i-pozyczki-hipoteczne/kredyt-hipoteczny')
        let element = await page.waitForSelector("#collapsible-04 > div > table > tbody > tr:nth-child(1) > td:nth-child(2) > p")
        let offerName = await page.evaluate(element => element.textContent, element)
    
        element = await page.waitForSelector("#collapsible-04 > div > table > tbody > tr:nth-child(2) > td:nth-child(2) > p")
        let value =  await page.evaluate(element => element.textContent, element)
    
        console.log('\n-- BOŚ --')
        console.log(`\n ${offerName}: ${value}`)
    
        element = await page.waitForSelector("#collapsible-04 > div > table > tbody > tr:nth-child(1) > td:nth-child(3) > p")
        offerName = await page.evaluate(element => element.textContent, element)
    
        element = await page.waitForSelector("#collapsible-04 > div > table > tbody > tr:nth-child(2) > td:nth-child(3) > p")
        value =  await page.evaluate(element => element.textContent, element)
    
        console.log(`\n ${offerName}: ${value}`)
    } catch (e) {
        console.log('BOŚ: ERROR')
    }
 }
