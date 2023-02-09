# FreshFromApi
<a href="https://main.d2tfyx6509cyun.amplifyapp.com/" target="_blank">www.freshfromapi.com</a>
if it doesn't work from the public URL, it is because the number of daily API calls is exceeded :(
<!-- TABLE OF CONTENTS -->
<h2 id="table-of-contents"> :book: Table of Contents</h2>

<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#git-strategy"> ➤Git Strategy</a></li>
      <li><a href="#agile"> ➤ Planning, ideating, building, testing, deploying...</a></li>
        <li><a href="#getting-started"> ➤ Getting Started</a></li>
    <li><a href="#getting-started"> ➤ Tools used</a></li>
    <li><a href="#testing"> ➤ Testing</a></li>
      <li><a href="#deployment"> ➤ Deployment</a></li>
  </ol>
  
  <!-- 74.4% of Javascript in the project because of Cypress files -->
  
  <!-- Git strategy -->
<h2 id="git-strategy"> :pencil: Git Strategy</h2>

<p align="justify"> 
 I created one development branch for code review, debugging and trying new features. If time allows, I would try to move a clean code to the main branch.
 Deployment is from the main branch.
</p>


    <!-- ABOUT THE PROJECT -->
<h2 id="agile"> :pencil: Planning, ideating, building, testing, deploying...</h2>
  
  <p align="justify"> 
I started with reading API docs and comparing other news websites to create better or similar UX for the website.
    I checked TheEconomist, BBC, FT and Telegraph; Identified common traits such as similar Navbar and news layout.
    Some sketching can be seen from the image below.
</p>
  
  <p align="center">
  <img src="https://lh3.googleusercontent.com/v00l3teHIrF74XbseUeQeflbqlFwMzbyQXKQhr-RKqt-Uj5YtN2hvz7wJebTEWTaBimeWOIe4WmP1oc1N6IYUZTJ6vlAlSoA89vWSGzWvcdFg2-cycDRyyk5JS2t8X6BU4xYU4w2le1CYtc3Q4wdPeNrEjWxRKWgN40LRhHU2hE2Mw8IRS80VB-E9Ip8uUsE5uJWTdaT0ZtjhFCrYN3QVgAWV37PkD8PaCxyHBpPchBfj9xRUyjf5bzKob85n4nTkGok5K9AqPUotN7fKAo5EjK99_eM0DOgSoY7cYqjoD8OINFRm1BNquVn8RxB9DJXI4cY2GClbR8yEi9a4XTWCYZekjlkL4YAnirP1YIF5dsfbLLHpLGSzqcjFcpsi4Wt90kmjq31gJZ8cvIS-3CGTOqw-btGxjJ7zNoF3NpYTm_zUjyCFbblK0ZGRj64kM-OfpsvLBl8RNZ66z0026oT_wbyxULpRP-aHFJG3EJba24qmSaJkdcBo748fxfHC99H4rSc3KMaageDUp-5K3bpIe1ZQ1wZJ6ovKxKaWL2Cq7sMxPi-SOo9JFdTazwTDvK2KXoKCnJ-P9XfNNa6w45HG0bcEmxIvZujuCNE1Au3aGDwl_WIHsPRD4ZGhWe_nOQvg3zna_gDni7qTMInhLLK4k4OB3kJgZNtwrR9kbZ_RzgHy0b9CPEkDRYf_pZHzUKq2JnieZh_K-cQrcs0iYQrxCBtRKTjiKu70U72dhMzqGZ3pT9fvqtr5W2PrqxZcR9MwEc5ugSmyNuGxHsFpL-4OJ8K2MRIJ3_Uzuw8JjX2zTocwvmfqwyVDCNt8p63p-vLMfCiFbCN9DonhUL0CjPh3VRiyhj9WfZkqjxBmvSQTKNWlwFKU-KqE4MJelgrMMDXYe36lg4YvgtJ6c2nf_EQgSFHE4roy_q7NNXwEXps8LpTz1A=w1590-h1814-no?authuser=0" alt="Table1: 18 Activities" width="70%" height="70%">        
  <!--figcaption>Caption goes here</figcaption-->
</p>
  
  <p align="justify"> 
Then, I moved to creating mockups for low and high fidelity. I was using mobile first approach in creating the design. Tools used: figma and figma pluggins for icons and the device frames;
</p> 
  
   <p align="center">
  <img src="https://lh3.googleusercontent.com/60qkyO-7ESQGSyAqJbb1CcJza3fzA9o8C8Q2yc4wY747ReEnKGtTi-mbH8OnYHaPO7jYJB3GZv5LdEhX_gs667wVWoMS3xpfChP4t_PIHKd6XQxDi4aA3OMWcjN0Y3VFUOuqzG4weR_hFOTS5I1Ko2uop_WDyS4QmcL9hJDuY3TwKkVoLhVAeZgV_ksk7AiZGlEBGAVBGxi5tEb0YIhKmfFcXj_mm3xxVZxG5LJwXKG6BqREeMUY0LFvA-YL4FdjEAXXkkYDnrJIUoWVKIAYS_vbliyuVp6w51zIGoTj1J2YyoBkaCIyBQnXpOiYgWLxN-8xrbaIMtyMma7cu3uysN9XA4HD6VYx1nl20VSvcPIhtgaxrik8D2GieEFsS3h6lrNyaew61f1YPfz03xUHEyI_t7nkNuJuC7g07Sw6mcspA6OxIxz0-NCytcy9XtFsb_IoMew7Lg9dysYrfDpucsyvb712vOawT5Djtnginyog0aCwlhwAtDyF0PLjQGZbGIxOE2V02F3HfQs0TGRx21jnjj2jfti7DZBn15PQTgbdtgtsQhMzqlrEJs7UhbbjUFtfjjMm7MO9pW5-g_dvEltfqilHWvnHzb-L52JcatIUmYM6tcLqsufLvZ4wcexp3uNqo71T7oDp_mqmHnDfNu3wBJnkwm1t1j7eDzPb7-zlo6elNLmkd4-hspF5NnEbEVHPOGknWYj4cehgvw69O9q8WDLcsi6uahLJL0CJYubHVQT3T7bxVLi1nUtM6rcggdopgjwUpG0EP5qSkFXTPx6FXRgWVT1-yHiirs3ZWli5vg3JA3lTGNfwkNx4RipSvpNie5NENwcOllonkuboOCeyGW-SJ3lDM1msJ7jqhuJ618F5Z1l3YfxRRYvA42Hb4DINaYkvyI5lUg5amJ1K_ywRe4fUSyI1tFTNFQ2mriaW1ro=w1200-h1794-no?authuser=0" width="70%" height="70%">        
  <!--figcaption>Caption goes here</figcaption-->
</p>
  

  <!-- GETTING STARTED   -->
<h2 id="getting-started"> :eagle: Getting Started</h2>

```bash
clone repository https://github.com/PercaysoRecruitment/pe3-soc-cohort13-itsevgenii.git
```
<p align="justify"> 
There are two branches. Main and developemnt. Development branch has detailed explanation.
Main branch is linked to jenkins and AWS. To start the project, the following shall be executed:
</p>

```bash
npm i
npm run dev
```


 <!-- TESTING   -->
<h2 id="testing"> :white_check_mark::x: TESTING</h2>

<p align="justify"> 
I did a little bit of E2E testing with Cypress. Have I had more time, I would be able to test more, also I need to make lots of reasearch to test other parts. 
</p>

<img src="https://lh3.googleusercontent.com/Z8oLzVoz-3cvizLUYsevgpVsrfA1eTHHbbz_iPODJpH623-O8ajAKRgH7LsCQp5xfTXIQ7z5vNZ_EkzJ5hSebZwefUYGzA3KbcQlJq2UIbiK2_kZJ6CUEAHKqmB6fjx6e2kaeVMCedLRdY0XGsN8KDWID0k3TX42INyJhneRlWSNoiEN9rrf_aY_dLuoxENbbaoBTDYngW5kqgZbk1-oHXNSGY-mbYrBgea800L1XlDKVrl5TM3Lt1PqHe0a6ycsMpNKOnJUxs9P8b8TR7sHOODtt5EqV50qr32eW-hCesZL2aFtM1H-_72gXDVUmyq6BNmLFImpAQkvKc3nenHbuKnAKManxKDl2lN3rTf6e2Quy54FVvlxTmaNWmFtA9Md36hScQUflb-OT7jKBeqimFzcLTqEXBATw9Zv0AHQbDwnF9ZlzhuoUInNRVU6ra7BOKYJN_t8M238V4Tdnp_JpH0D13ZKKb92HefZBCLfCyDKoK2v0ctmajdfEOF1jovrLrjvYeuw5LN6-CJkBJd8SfXahtI6UgQTPbY86J8H3PxKY5iaNcH6K166iv0oCzbM2idgxHmqXG9dHbbrmKc7pcU8jUUYxjhHz4J4nYY9AAfJssbPKc4Dj1t63a_0dFWverQZEYcV9yxlVDlHARtgFLi4VdEOwOrv28DPPDZrEpVFWtluhiF8x4EQNJfgKBkuapCVL-ZOKhuIp-PCnX45_Ljmd357n7jdpehmujf9E7OL0f2-31oQWUvZHiMovymFhRyqTp613OIJ5dLURzUkwVqh6bNGaw5YwQMlswbgyUdV7N06qyE1B_2RaztVyg00FHeSBF6_XxvrQV7AczFTPn5-X08P-cK49Xc6YfXnOa0qS2iDvBBNN3h8zpFDRSIPH_E-vW8MMzt0CD63CsyBkloO5v1ZlooTBsTIWIAGWTRqUDA=w3570-h1876-no?authuser=0" alt="evidence of cypress testing">

```bash
npx cypress open


```

 <!-- Deployment   -->
<h2 id="deployment"> :white_check_mark: deployed on AWS amplify</h2>
