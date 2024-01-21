const content = `
<div class="textPrivacy">
    <h2 class="titlePrivacy">Legal Notice:</h2>
    <ul>
        <li>The present website is published by Grandioso Vinci, registered with the Chamber of Commerce and Industry of Belgium under number 318 591 064, with its registered office at 20 Avenue Vinci. Tel: +32 2 12 34 56 78 </li>

        <li>The Director of the publication of the Site is: Tom Simonis. </li>

        <li>The hosting of the Site is provided by the company Vinci & Co, a simplified joint-stock company with its registered office at 1 Place Vinci No. 20, 1200 Brussels. Tel: +32 2 53 40 05 00 </li>

        <li>Access to the Site and the use of its content are subject to the terms of use described below. Accessing and browsing the Site constitutes, on the part of the visitor, an unconditional acceptance of the following stipulations: </li>

        <li>The Site is the exclusive property of the company Grandioso Vinci, solely authorized to use and exploit the intellectual property rights and personality rights attached to this site, including trademarks, copyrights, and the right to image, either originally or by express authorization, patent, and any intellectual property right. </li>

        <li>The use of all or part of the Site, including downloading, reproduction, transmission, or representation for purposes other than personal and private use for non-commercial purposes, is strictly prohibited. </li>

        <li>Grandioso Vinci informs the visitor that the products are sold exclusively in Grandioso Vinci branded stores worldwide and on the e-commerce section of the Grandioso Vinci website accessible from certain countries or regions only, such as Belgium, as specified in the relevant sections. </li>

        <li>Any purchase outside of these sales locations is made at the risk and peril of the buyer, especially regarding the authenticity of said products. </li>

        <li>Grandioso Vinci strives to ensure, to the best of its ability, the accuracy and updating of the information disseminated on the Site, reserving the right to correct the content at any time and without notice. </li>
        <li>Under the conditions provided by law, Grandioso Vinci incurs no liability: </li>
    </ul>
    <ol>
        <li>for any inaccuracy, omission, or any damage resulting from an intrusion by a third party that has led to a modification of the information made available on the Site. </li>
        <li>in the event of damage caused by the access of an unauthorized third party to the Site or rendering its access impossible. </li>
    </ol>
    <ul>
        <li>The visitor is informed that access to the Site may be interrupted at any time by Grandioso Vinci for reasons of maintenance, security, or any other technical constraint. </li>
        <li>The creation of hypertext links to the Site can only be done with the written and prior authorization of Grandioso Vinci, which may be revoked at any time. Grandioso Vinci disclaims all responsibility for the content of sites linked to the Site. </li>

        <li>Grandioso Vinci informs Site visitors that these conditions may be modified at any time. These modifications take effect as soon as they are posted online and are deemed accepted without reservation by any visitor who accesses the Site after their posting. It is therefore the responsibility of any visitor, before browsing the Site, to read these conditions carefully. </li>

        <li>These conditions are governed by French law. French courts are territorially competent to hear any dispute relating to the use of the Site. </li>
    </ul>
    <h2 class="titlePrivacy">Credits :</h2>
    <ul>
        <li>All 3D models used on this site come from https://sketchfab.com/ and are the property of the users who put them online.</li>
    </ul>
</div>
`;

const LegalAndPrivacy = () => {
  const main = document.querySelector('main');
  main.innerHTML = content;
};

export default LegalAndPrivacy;
