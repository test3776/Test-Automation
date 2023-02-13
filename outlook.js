import { Selector } from "testcafe";

fixture('Outlook Poc')

    .page('https://outlook.live.com/owa/')
    .skipJsErrors();


test('login to Outlook', async t => {

    await t
    await t.click(Selector('a').withText('Sign in'))

        // Login to outlook

        .typeText('#i0116', 'testid30@outlook.com')
        .click('#idSIButton9')
        .typeText('#i0118', 'India@123456')
        .click('#idSIButton9')
        .click("#KmsiCheckboxField")
        .click('#idSIButton9')

         // Maximize the Window
         .maximizeWindow()
         .wait(5000)
});

    // test('Send a mail', async t => {

    //     await t
    //     await t.click(Selector('a').withText('Sign in'))

    //         // Login to outlook

    //         .typeText('#i0116', 'testid30@outlook.com')
    //         .click('#idSIButton9')
    //         .typeText('#i0118', 'India@123456')
    //         .click('#idSIButton9')
    //         .click("#KmsiCheckboxField")
    //         .click('#idSIButton9')

    //         // Maximize the Window
    //         .maximizeWindow()

    //         // create a mail
    //         .wait(10000)
    //         .click(Selector('button').withAttribute('aria-label', 'New mail'))
    //         .wait(5000)
    //         .typeText(Selector('div').withAttribute('aria-label', 'To'), 'testing-44@outlook.com')
    //         .pressKey('Enter')
    //         .typeText(Selector('input').withAttribute('aria-label', 'Add a subject'), 'Test')
    //         .typeText(Selector('div').withAttribute('aria-label', 'Message body, press Alt+F10 to exit'), 'Hi, Test')
    //         .click(Selector('div').withAttribute('aria-label', 'Send'))
    //         .wait(5000)
    // })

    //     test('Add a note', async t => {

    //         await t
    //         await t.click(Selector('a').withText('Sign in'))

    //             // Login to outlook

    //             .typeText('#i0116', 'testid30@outlook.com')
    //             .click('#idSIButton9')
    //             .typeText('#i0118', 'India@123456')
    //             .click('#idSIButton9')
    //             .click("#KmsiCheckboxField")
    //             .click('#idSIButton9')

    //             // Maximize the Window
    //             .maximizeWindow()


    //             //Add a note(upper menu)
    //             .wait(10000)
    //             .click('._22C064QVKdcRZOXJCYilG4')
    //             .click(Selector('span').withText(''))
    //             .click(Selector('button').withAttribute('aria-label', 'OneNote feed'))
    //             .click(Selector('span').withText('Add a note'))
    //             .typeText(Selector('div').withAttribute('aria-label', 'Editing note'), 'Testing is being done. Start with new functions')
    //             .wait(15000)
    //             .setFilesToUpload('input[type="file"]',
    //                 ['C:\\Users\\PenTester06\\Documents\\Image.jpg'])


    //             // .setFilesToUpload('.n-image-input',

    //             //     ['C:\\Users\\PenTester06\\Documents\\TestCafe\\running_icon.png'])

    //             .wait(3000)
    //             // Using Bullets
    //             .click(Selector('i').withAttribute('data-icon-name', 'BulletedList'))

    //             //change color of Note
    //             .click(Selector('i').withAttribute('data-icon-name', 'More'))
    //             .hover(Selector('span').withText('Change color'))
    //             .click(Selector('span').withText('Blue'))


    //         // Inserting Image

    //         //.setFilesToUpload(Selector('i').withAttribute('data-icon-name', 'Photo2'), ['C:\Users\PenTester06\Documents\TestCafe\running_icon.png'] )
    //         //.setFilesToUpload(Selector('input').withAttribute('type','file'),
    //         //['C:\\Users\\PenTester06\\Documents\\TestCafe\\running_icon.png'])

    //         /* View Settings
    //         .click(Selector('span').withText('View'))
    //         .click(Selector('span').withText('View settings'))
    //         .click(Selector('span').withText('General'))
    //         .wait(1000)
    //         .click(Selector('i').withAttribute('data-icon-name', 'Calendar'))*/

            
    //     });