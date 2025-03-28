import React from 'react';

const Privacy = () => {

    const sections = [
        "WHAT INFORMATION DO WE COLLECT?",
        "HOW DO WE PROCESS YOUR INFORMATION?",
        "WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?",
        "DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?",
        "HOW DO WE HANDLE YOUR SOCIAL LOGINS?",
        "IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?",
        "HOW LONG DO WE KEEP YOUR INFORMATION?",
        "DO WE COLLECT INFORMATION FROM MINORS?",
        "WHAT ARE YOUR PRIVACY RIGHTS?",
        "CONTROLS FOR DO-NOT-TRACK FEATURES",
        "DO WE MAKE UPDATES TO THIS NOTICE?",
        "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?",
        "HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?",
    ];



    return (
        <div>
            <div className="bg-purple-600 py-8 flex justify-center flex-col items-center gap-4">
                <h1 className="font-bold text-4xl text-white">Privacy Policy</h1>
                <p className="text-white w-1/2 text-center">Last updated February 24, 2025</p>
            </div>

            <div className="md:w-4/5 mx-auto p-3 md:p-10 text-sm bg-white shadow-lg rounded-lg my-12">

                <div className="text-gray-700 mt-2 space-y-4">
                    <h2 className="text-lg md:text-2xl font-semibold mb-4">PRIVACY NOTICE</h2>
                    <p>This Privacy Notice for <b>Sayed Prime LLC</b> ("we," "us," or "our"), describes how and why we might access, collect, store, use, and/or share ( <b>"process"</b> ) your personal information when you use our services ( <b>"Services"</b> ), including when you: <br />
                        <b>Questions or concerns ?</b> Reading this Privacy Notice will help you understand your privacy rights and choices. We are responsible for making decisions about how your personal information is processed. If you do not agree with our policies and practices, please do not use our Services.
                    </p>
                </div>

                <div className="mt-10 space-y-6">
                    <h2 className="text-lg md:text-2xl font-semibold mb-4">SUMMARY OF KEY POINTS</h2>
                    <p className='font-semibold italic'>This summary provides key points from our Privacy Notice, but you can find out more details about any of these topics by clicking the link following each key point or by using our <a className='link text-blue-500' href="#table">table of contents</a> below to find the section you are looking for.</p>

                    <p><b>What personal information do we process?</b> When you visit, use, or navigate our Services, we may process personal information depending on how you interact with us and the Services, the choices you make, and the products and features you use. Learn more about <a className='link-primary link' href='#section-1'>personal information you disclose to us.</a></p>

                    <p><b>Do we process any sensitive personal information?</b> Some of the information may be considered "special" or "sensitive" in certain jurisdictions, for example your racial or ethnic origins, sexual orientation, and religious beliefs. We do not process sensitive personal information.</p>

                    <p><b>Do we collect any information from third parties?</b> We may collect information from public databases, marketing partners, social media platforms, and other outside sources. Learn more about information collected from other sources.</p>

                    <p><b>How do we process your information?</b> We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent. We process your information only when we have a valid legal reason to do so. Learn more about <a className='link-primary link' href='#section-2'>how we process your information.</a></p>

                    <p><b>In what situations and with which parties do we share personal information?</b> We may share information in specific situations and with specific third parties. Learn more about <a className='link-primary link' href='#section-3'>when and with whom we share your personal information.</a></p>

                    <p><b>What are your rights?</b> Depending on where you are located geographically, the applicable privacy law may mean you have certain rights regarding your personal information. Learn more about <a className='link-primary link' href='#section-9'>your privacy rights.</a></p>

                    <p>How do you exercise your rights? The easiest way to exercise your rights is by submitting a data subject access request, or by contacting us. We will consider and act upon any request in accordance with applicable data protection laws.
                    </p>

                    <p>Want to learn more about what we do with any information we collect? <a className='link-primary link' href='#table'>Review the Privacy Notice in full</a>.</p>
                </div>

                <div id='table' className='mt-6'>
                    <h2 className="text-lg md:text-2xl font-bold mb-4">TABLE OF CONTENTS</h2>
                    <ul className="list-none mb-6">
                        {sections.map((section, index) => (
                            <li key={index} className="mb-2">
                                <a
                                    href={`#section-${index + 1}`}
                                    className="text-blue-600 hover:underline"
                                >
                                    {index + 1}. {section}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>


                <div id='section-1' className="mt-10 space-y-6">
                    <h1 className='text-lg md:text-2xl font-semibold'>1. WHAT INFORMATION DO WE COLLECT?</h1>
                    <h2 className='text-lg font-semibold'>Personal information you disclose to us</h2>

                    <p className='italic'><b>In Short:</b> We collect personal information that you provide to us.</p>

                    <p>We collect personal information that you voluntarily provide to us when you register on the Services, express an interest in obtaining information about us or our products and Services, when you participate in activities on the Services, or otherwise when you contact us.</p>

                    <p><b>Sensitive Information.</b> We do not process sensitive information.
                    </p>

                    <p>All personal information that you provide to us must be true, complete, and accurate, and you must notify us of any changes to such personal information.</p>

                    <h2 className='text-lg font-semibold'>Information automatically collected</h2>

                    <p><b>In Short:</b> Some information — such as your Internet Protocol (IP) address and/or browser and device characteristics — is collected automatically when you visit our Services.</p>

                    <p>We automatically collect certain information when you visit, use, or navigate the Services. This information does not reveal your specific identity (like your name or contact information) but may include device and usage information, such as your IP address, browser and device characteristics, operating system, language preferences, referring URLs, device name, country, location, information about how and when you use our Services, and other technical information. This information is primarily needed to maintain the security and operation of our Services, and for our internal analytics and reporting purposes.</p>

                    <p>Like many businesses, we also collect information through cookies and similar technologies.</p>
                </div>

                <div id='section-2' className="mt-10 space-y-6">
                    <h1 className='text-lg md:text-2xl font-semibold'>2. HOW DO WE PROCESS YOUR INFORMATION?</h1>

                    <p className='italic'><b>In Short:</b>We process your information to provide, improve, and administer our Services, communicate with you, for security and fraud prevention, and to comply with law. We may also process your information for other purposes with your consent.</p>

                    <p className='font-semibold'>We process your personal information for a variety of reasons, depending on how you interact with our Services, including:
                    </p>
                </div>

                <div id='section-3' className="mt-10 space-y-6">
                    <h1 className='text-lg md:text-2xl font-semibold'>3. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h1>

                    <p className='italic'><b>In Short:</b> We may share information in specific situations described in this section and/or with the following third parties.</p>

                    <p>We may need to share your personal information in the following situations:</p>

                    <ul className='list-disc pl-10 md:pl-14'>
                        <li>Business Transfers. We may share or transfer your information in connection with, or during negotiations of, any merger, sale of company assets, financing, or acquisition of all or a portion of our business to another company.</li>
                        <li>Affiliates. We may share your information with our affiliates, in which case we will require those affiliates to honor this Privacy Notice. Affiliates include our parent company and any subsidiaries, joint venture partners, or other companies that we control or that are under common control with us.</li>
                        <li>Business Partners. We may share your information with our business partners to offer you certain products, services, or promotions.</li>
                    </ul>
                </div>

                <div id='section-4' className="mt-10 space-y-6">
                    <h1 className='text-lg md:text-2xl font-semibold'>4. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h1>

                    <p className='italic'><b>In Short:</b> We may use cookies and other tracking technologies to collect and store your information.</p>

                    <p>We may use cookies and similar tracking technologies (like web beacons and pixels) to gather information when you interact with our Services. Some online tracking technologies help us maintain the security of our Services, prevent crashes, fix bugs, save your preferences, and assist with basic site functions.</p>

                    <p>We also permit third parties and service providers to use online tracking technologies on our Services for analytics and advertising, including to help manage and display advertisements, to tailor advertisements to your interests, or to send abandoned shopping cart reminders (depending on your communication preferences). The third parties and service providers use their technology to provide advertising about products and services tailored to your interests which may appear either on our Services or on other websites.</p>

                    <p>Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.</p>
                </div>

                <div id='section-5' className="mt-10 space-y-6">
                    <h1 className='text-lg md:text-2xl font-semibold'>5. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h1>

                    <p className='italic'><b>In Short:</b> If you choose to register or log in to our Services using a social media account, we may have access to certain information about you.</p>

                    <p>Our Services offer you the ability to register and log in using your third-party social media account details (like your Facebook or X logins). Where you choose to do this, we will receive certain profile information about you from your social media provider. The profile information we receive may vary depending on the social media provider concerned, but will often include your name, email address, friends list, and profile picture, as well as other information you choose to make public on such a social media platform.</p>

                    <p>We will use the information we receive only for the purposes that are described in this Privacy Notice or that are otherwise made clear to you on the relevant Services. Please note that we do not control, and are not responsible for, other uses of your personal information by your third-party social media provider. We recommend that you review their privacy notice to understand how they collect, use, and share your personal information, and how you can set your privacy preferences on their sites and apps.</p>
                </div>

                <div id='section-6' className="mt-10 space-y-6">
                    <h1 className='text-lg md:text-2xl font-semibold'>6. IS YOUR INFORMATION TRANSFERRED INTERNATIONALLY?</h1>

                    <p className='italic'><b>In Short:</b> We may transfer, store, and process your information in countries other than your own.</p>

                    <p>Our servers are located in. If you are accessing our Services from outside, please be aware that your information may be transferred to, stored by, and processed by us in our facilities and in the facilities of the third parties with whom we may share your personal information (see " <a className='link-primary link' href='#section-3'>WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</a> " above), in and other countries.</p>

                    <p>If you are a resident in the European Economic Area (EEA), United Kingdom (UK), or Switzerland, then these countries may not necessarily have data protection laws or other similar laws as comprehensive as those in your country. However, we will take all necessary measures to protect your personal information in accordance with this Privacy Notice and applicable law.</p>
                </div>

                <div id='section-7' className="mt-10 space-y-6">
                    <h1 className='text-lg md:text-2xl font-semibold'>7. HOW LONG DO WE KEEP YOUR INFORMATION?</h1>

                    <p className='italic'><b>In Short:</b> We keep your information for as long as necessary to fulfill the purposes outlined in this Privacy Notice unless otherwise required by law.</p>

                    <p>We will only keep your personal information for as long as it is necessary for the purposes set out in this Privacy Notice, unless a longer retention period is required or permitted by law (such as tax, accounting, or other legal requirements).</p>

                    <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
                </div>

                <div id='section-8' className="mt-10 space-y-6">
                    <h1 className='text-lg md:text-2xl font-semibold'>8. DO WE COLLECT INFORMATION FROM MINORS?</h1>

                    <p className='italic'><b>In Short:</b> We do not knowingly collect data from or market to children under 18 years of age.</p>

                    <p>We do not knowingly collect, solicit data from, or market to children under 18 years of age, nor do we knowingly sell such personal information. By using the Services, you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent to such minor dependent’s use of the Services. If we learn that personal information from users less than 18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly delete such data from our records. If you become aware of any data we may have collected from children under age 18, please contact us at <a href="mailto:info@sayedprime.shop" className="text-blue-600 hover:underline">
                        info@sayedprime.shop
                    </a>{" "}</p>

                    <p>When we have no ongoing legitimate business need to process your personal information, we will either delete or anonymize such information, or, if this is not possible (for example, because your personal information has been stored in backup archives), then we will securely store your personal information and isolate it from any further processing until deletion is possible.</p>
                </div>

                <div id='section-9' className="mt-10 space-y-6">
                    <h1 className='text-lg md:text-2xl font-semibold'>9. WHAT ARE YOUR PRIVACY RIGHTS?</h1>

                    <p className='italic'><b>In Short:</b> You may review, change, or terminate your account at any time, depending on your country, province, or state of residence.</p>

                    <p><b className='link'>Withdrawing your consent:</b> If we are relying on your consent to process your personal information, which may be express and/or implied consent depending on the applicable law, you have the right to withdraw your consent at any time. You can withdraw your consent at any time by contacting us by using the contact details provided in the section " <a className='link link-primary' href='#section-13'>HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a> " below.</p>

                    <p>However, please note that this will not affect the lawfulness of the processing before its withdrawal nor, when applicable law allows, will it affect the processing of your personal information conducted in reliance on lawful processing grounds other than consent.</p>

                    <h2 className='text-lg font-semibold'>Account Information</h2>

                    <p>If you would at any time like to review or change the information in your account or terminate your account, you can:
                        Upon your request to terminate your account, we will deactivate or delete your account and information from our active databases. However, we may retain some information in our files to prevent fraud, troubleshoot problems, assist with any investigations, enforce our legal terms and/or comply with applicable legal requirements.</p>
                </div>

                <div id='section-10' className="mt-10 space-y-6">
                    <h1 className='text-lg md:text-2xl font-semibold'>10. CONTROLS FOR DO-NOT-TRACK FEATURES</h1>

                    <p>Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") feature or setting you can activate to signal your privacy preference not to have data about your online browsing activities monitored and collected. At this stage, no uniform technology standard for recognizing and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals or any other mechanism that automatically communicates your choice not to be tracked online. If a standard for online tracking is adopted that we must follow in the future, we will inform you about that practice in a revised version of this Privacy Notice.</p>
                </div>

                <div id='section-11' className="mt-10 space-y-6">
                    <h1 className='text-lg md:text-2xl font-semibold'>11. DO WE MAKE UPDATES TO THIS NOTICE?</h1>

                    <p className='italic'><b>In Short:</b> Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>

                    <p>We may update this Privacy Notice from time to time. The updated version will be indicated by an updated "Revised" date at the top of this Privacy Notice. If we make material changes to this Privacy Notice, we may notify you either by prominently posting a notice of such changes or by directly sending you a notification. We encourage you to review this Privacy Notice frequently to be informed of how we are protecting your information.</p>
                </div>

                <div id='section-12' className="mt-10 space-y-6">
                    <h1 className='text-lg md:text-2xl font-semibold'>12. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h1>

                    <p>If you have questions or comments about this notice, you may contact us by post at:</p>
                    <ul className='list-disc pl-10 md:pl-14'>
                        <li><a href="mailto:info@sayedprime.shop" className="text-blue-600 hover:underline">
                            info@sayedprime.shop
                        </a>{" "}</li>
                    </ul>
                </div>

                <div id='section-13' className="mt-10 space-y-6">
                    <h1 className='text-lg md:text-2xl font-semibold'>13. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h1>

                    <p>Based on the applicable laws of your country, you may have the right to request access to the personal information we collect from you, details about how we have processed it, correct inaccuracies, or delete your personal information. You may also have the right to withdraw your consent to our processing of your personal information. These rights may be limited in some circumstances by applicable law. To request to review, update, or delete your personal information, please fill out and submit a data subject access request.</p>
                </div>
            </div>
        </div>
    );
};

export default Privacy;