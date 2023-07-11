import React from 'react';
import './Footer';
import { Link } from 'react-router-dom'


function PrivacyPolicy() {
    const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
    const todayDate = new Date().toLocaleDateString('en-US', options)
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 py-5">

                        <h3>TeachingCopilot.com</h3>
                        <h3>Privacy Policy</h3>

                        <p>Effective Date: {todayDate}</p>

                        <p>This Privacy Policy describes how we collect, use, and protect the personal information provided by users ("you" or "user") on [your website domain] ("the website"). We are committed to ensuring the privacy and security of your personal information. By accessing and using the website, you agree to the terms and conditions of this Privacy Policy.</p>

                        <h4>1. Information We Collect:</h4>

                        <h5>1.1 Personal Information:</h5>
                        <p>We may collect the following personal information from users who voluntarily provide it to us:</p>
                        <ul>
                            <li>Full name</li>
                            <li>Email address</li>
                        </ul>

                        <h4>2. Use of Information:</h4>

                        <h5>2.1 Providing Services:</h5>
                        <p>We may use the personal information you provide to fulfill your requests, respond to inquiries, and provide customer support. This includes sending you emails or other communications related to the services requested.</p>

                        <h5>2.2 Communication:</h5>
                        <p>We may use your email address to send you periodic newsletters, updates, promotional offers, or other information related to our products and services. You can choose to unsubscribe from these communications at any time by following the instructions provided in the email.</p>

                        <h4>3. Data Sharing and Disclosure:</h4>

                        <h5>3.1 Third-Party Service Providers:</h5>
                        <p>We may engage third-party service providers to assist us in operating the website or performing services on our behalf, such as hosting, data storage, and customer support. These service providers may have access to your personal information only to perform specific tasks on our behalf and are obligated not to disclose or use it for any other purpose.</p>

                        <h5>3.2 Legal Requirements:</h5>
                        <p>We may disclose your personal information if required to do so by law or in response to a valid request from a governmental authority or law enforcement agency.</p>

                        <h4>4. Data Security:</h4>

                        <p>We have implemented appropriate technical and organizational measures to safeguard your personal information from unauthorized access, use, alteration, or disclosure. However, please be aware that no data transmission over the internet or storage system can be guaranteed to be 100% secure. While we strive to protect your personal information, we cannot guarantee the absolute security of your information transmitted to us.</p>
                        <h4>5. Data Retention:</h4>
                        <p>We will retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy Policy unless a longer retention period is required or permitted by law.</p>
                        
                        <h4>6. Children's Privacy:</h4>
                        <p>Our website is not intended for children under the age of 13. We do not knowingly collect personal information from children under the age of 13. If we become aware that we have collected personal information from a child under the age of 13 without parental consent, we will take steps to remove that information from our servers.</p>
                        
                        <h4>7. Changes to this Privacy Policy:</h4>
                        <p>We reserve the right to modify this Privacy Policy at any time. Any changes we make will be effective immediately upon posting the updated Privacy Policy on the website. Your continued use of the website after the revised Privacy Policy has been posted indicates your acceptance of the changes. We encourage you to review this Privacy Policy periodically.</p>
                        
                        <h4>8. Contact Us:</h4>
                        <p>If you have any questions, concerns, or suggestions regarding this Privacy Policy, please contact us at <Link to="mailto:hello@teachingCopilot.com">hello@teachingCopilot.com</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy