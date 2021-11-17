const { cp } = require("fs");
const puppeteer=require("puppeteer");
let pages;
//puppeteer.launch()
console.log("before");
const browserOpenpromise=puppeteer.launch({
  headless : false,
  slowMo:true,
  defaultViewport:null,
  args:["start-maximized"]
});
browserOpenpromise.then(function (browser)
{
//    console.log("browser opened");
//give currently open tabs
const pageOpenpromise = browser.pages();
  return pageOpenpromise;
}).then(function (browserPages)
{
    page=browserPages[0];
    let gotoPromise = page.goto("https://www.google.com/");
    return gotoPromise;
}).then(function ()
{
  //waiting for element to appear on the page
  let elementwaitPromise=page.waitForSelector("input[type='text']",{visible: true});
  return elementwaitPromise; 
}).then(function ()
{
  // console.log("Rechead google Home page");
  // type any element on that page
  let keywillBeSendPromise=page.type("input[type='text']","pepcoding");
return keywillBeSendPromise;
}).then(function ()
{
  // page.keyboard is used to type special character
  let enterWillBePressed=page.keyboard.press("Enter");
  return enterWillBePressed;
}).then(function ()
{
  let elementwait=page.waitForSelector("h3.LC20lb.MBeuO",{visible:true});
  return elementwait; 
}).then(function ()
{
  //mouse 
  let keywillBeSendPromise= page.click("h3.LC20lb.MBeuO");
  return keywillBeSendPromise;
}).catch(function (err)
{
  console.log(err);
})
console.log("after");
