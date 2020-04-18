import React from 'react';
import Layout from '../components/Layout';

const PrivacyPage = () => {
  return (
    <Layout page="privacy">
      <div className="wrapper">
        <div className="content-container with-margin">
          <h1>Privacy Policy</h1>
          <p>
            This Privacy Policy describes how your personal information is collected, used, and
            shared when you visit or make a purchase from www.dickwyn.xyz (the “Site”).
          </p>
          <h2>PERSONAL INFORMATION WE COLLECT</h2>
          <p>
            When you visit the Site, we automatically collect certain information about your device,
            including information about your web browser, IP address, time zone, and some of the
            cookies that are installed on your device. Additionally, as you browse the Site, we
            collect information about the individual web pages or products that you view, what
            websites or search terms referred you to the Site, and information about how you
            interact with the Site. We refer to this automatically-collected information as “Device
            Information.”
          </p>
          <p>We collect Device Information using the following technologies:</p>
          <ul>
            <li>
              “Cookies” are data files that are placed on your device or computer and often include
              an anonymous unique identifier. For more information about cookies, and how to disable
              cookies, visit http://www.allaboutcookies.org.
            </li>
            <li>
              “Log files” track actions occurring on the Site, and collect data including your IP
              address, browser type, Internet service provider, referring/exit pages, and date/time
              stamps.
            </li>
            <li>
              “Web beacons,” “tags,” and “pixels” are electronic files used to record information
              about how you browse the Site.
            </li>
          </ul>
          <h2>CONTACT US</h2>

          <p>
            For more information about our privacy practices, if you have questions, or if you would
            like to make a complaint, please contact us by e-mail at privacy@dickwyn.xyz
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default PrivacyPage;
