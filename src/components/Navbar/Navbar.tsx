import React, { useState, useEffect } from 'react';
//importing module styling file to provide unique styling to the page with class names been connected inly to this file
import NavbarStyle from './Navbar.module.scss';
import logo from './logo.png'
import searchIcon from './searchIcon.png'
import dropdownIcon from './dropdown.png'
import NewsContainer from '../NewsContainer/NewsContainer';
//.
//created array of nested objects with languages  to make query params filtering work for the API call
const languages = [
{ name: "Arabic", code: "ar" },
{ name: "Chinese", code: "zh" },
{ name: "Dutch", code: "nl" },
{ name: "English", code: "en" },
{ name: "French", code: "fr" },
{ name: "German", code: "de" },
{ name: "Greek", code: "el" },
{ name: "Hebrew", code: "he" },
{ name: "Hindi", code: "hi" },
{ name: "Italian", code: "it" },
{ name: "Japanese", code: "ja" },
{ name: "Malayalam", code: "ml" },
{ name: "Marathi", code: "mr" },
{ name: "Norwegian", code: "no" },
{ name: "Portuguese", code: "pt" },
{ name: "Romanian", code: "ro" },
{ name: "Russian", code: "ru" },
{ name: "Spanish", code: "es" },
{ name: "Swedish", code: "sv" },
{ name: "Tamil", code: "ta" },
{ name: "Telugu", code: "te" },
{ name: "Ukrainian", code: "uk" },
];

//created array of nested objects with countries to make query params filtering work for the API call

const countries = [
  { name: 'Australia', code: 'au' },
  { name: 'Brazil', code: 'br' },
  { name: 'Canada', code: 'ca' },
  { name: 'China', code: 'cn' },
  { name: 'Egypt', code: 'eg' },
  { name: 'France', code: 'fr' },
  { name: 'Germany', code: 'de' },
  { name: 'Greece', code: 'gr' },
  { name: 'Hong Kong', code: 'hk' },
  { name: 'India', code: 'in' },
  { name: 'Ireland', code: 'ie' },
  { name: 'Israel', code: 'il' },
  { name: 'Italy', code: 'it' },
  { name: 'Japan', code: 'jp' },
  { name: 'Netherlands', code: 'nl' },
  { name: 'Norway', code: 'no' },
  { name: 'Pakistan', code: 'pk' },
  { name: 'Peru', code: 'pe' },
  { name: 'Philippines', code: 'ph' },
  { name: 'Portugal', code: 'pt' },
  { name: 'Romania', code: 'ro' },
  { name: 'Russian Federation', code: 'ru' },
  { name: 'Singapore', code: 'sg' },
  { name: 'Spain', code: 'es' },
  { name: 'Sweden', code: 'se' },
  { name: 'Switzerland', code: 'ch' },
  { name: 'Taiwan', code: 'tw' },
  { name: 'Ukraine', code: 'ua' },
  { name: 'United Kingdom', code: 'gb' },
  { name: 'United States', code: 'us' },
];


// created array of nested objects with categories to make query params filtering work for the API call 

const categories = [
  { name: 'General', code: 'general' },
  { name: 'World', code: 'world' },
  { name: 'Nation', code: 'nation' },
  { name: 'Business', code: 'business' },
  { name: 'Entertainment', code: 'entertainment' },
  { name: 'Sports', code: 'sports' },
  { name: 'Science', code: 'science' },
  { name: 'Health', code: 'health' },
]



const Navbar = () => {
  //useState to display "Modal" with filtering functionality 
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false);

  //useState to provide responsiveness and liquidity to the navbar
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const[ search, setSearch] = useState<string | null>("");

  //Line 92 to line 95, tried to implement filtereing functionality in a different less efficient way
  // const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);
  // const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  // const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  //useState to update Modal data
  const [filter, setFilter] = useState<{
    language?: string | null , //question mark is added to let typescript know that the language property is optional
    country?: string | null ,
    category?: string | null ,
  } | null>({
    language: "en", //default initial state values
    country: "gb",
    category: "business"
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value)
setSearch(e.target.value)
  }

  //arrow function to update filter state with the inputted data from the Modal
    const handleFilterChange = (name: string) => (e: React.ChangeEvent<HTMLSelectElement>) => {
      //updating the Filter state with setFilter using spread operator for the inmutable array
      setFilter({
        ...filter,
        [name]: e.target.value
      });
    };

    //debugging in progress
console.log("line 101", filter)


//useEffect to lsiten to the screen size changes
useEffect(() => {
  const handleWindowResize = () => {
    setScreenWidth(window.innerWidth);
  };

  window.addEventListener('resize', handleWindowResize);
  return () => {
    window.removeEventListener('resize', handleWindowResize);
  };
}, []);//empty dependecy because we need to see our screen size continuesly

return (
  <div>
    
    {screenWidth > 425 ? (
      // desktop view
      <>
      <nav className={`${NavbarStyle.navbar} ${dropdownOpen ? NavbarStyle.navbarOpen : ''}`}>
   <div className={NavbarStyle.logo}>
  <img src={logo} alt="logo"/>
   </div>
   <img className={NavbarStyle.dropdownIcon} src={dropdownIcon} alt="dropdown icon" onClick={() => setDropdownOpen(!dropdownOpen)}/> 

   <form className={NavbarStyle.filterFormDesktop}>
    <select value={filter?.language || ""} onChange={handleFilterChange("language")}>
      {/* mapping through the languages array to display the options in the select element */}
  {languages.map(language => (
  <option key={language.code} value={language.code}>
  {language.name}
  </option>
  ))}
  </select>
     <select value={filter?.country || ""} onChange={handleFilterChange("country")}>
      {/* mapping through the countries array to display the options in the select element */}
   {countries.map(country => (
  <option key={country.code} value={country.code}>
  {country.name}
  </option>
  ))}
    </select>
    <select value={filter?.category || ""} onChange={handleFilterChange("category")}>
        {/* mapping through the categories array to display the options in the select element */}
    {categories.map(category => (
  <option key={category.code} value={category.code}>
  {category.name}
  </option>
  ))}
    </select>
   </form> 

   <form className={NavbarStyle.form}>
   <input type="text" onChange={handleInputChange}/>
  <img src={searchIcon} alt="search icon"/>
   </form>
   </nav>
   {/* passing props to NewsContainer */}
   <NewsContainer search={search} filter={filter}/>
   </>
    ) : (
      //  mobile first approach

      <>
      <nav className={`${NavbarStyle.navbar} ${dropdownOpen ? NavbarStyle.navbarOpen : ''}`}>
   <div className={NavbarStyle.logo}>
  <img src={logo} alt="logo"/>
   </div>
   <img className={NavbarStyle.dropdownIcon} src={dropdownIcon} alt="dropdown icon" onClick={() => setDropdownOpen(!dropdownOpen)}/> 
   {/* Modal activation. if the img is clicked, the modal will be visible */}
   {dropdownOpen ?
   <form className={NavbarStyle.filterForm}>
    <label htmlFor='Language'>Set Language</label>
    <select value={filter?.language || ""} onChange={handleFilterChange("language")}>
  {languages.map(language => (
  <option key={language.code} value={language.code}>
  {language.name}
  </option>
  ))}
  </select>
     <label htmlFor='Country'>Set country</label>
     <select value={filter?.country || ""} onChange={handleFilterChange("country")}>
   {countries.map(country => (
  <option key={country.code} value={country.code}>
  {country.name}
  </option>
  ))}
    </select>
    <label htmlFor='Category'>Set category</label>
    <select value={filter?.category || ""} onChange={handleFilterChange("category")}>
    {categories.map(category => (
  <option key={category.code} value={category.code}>
  {category.name}
  </option>
  ))}
    </select>
    <label htmlFor='time'>From time?</label>
    <input type="datetime-local" name='time' id='time'/>
    <button>set filters</button>
   </form> : null
   }
  
  
   <form className={NavbarStyle.form}>
    <input type="text" onChange={handleInputChange}/>
  <img src={searchIcon} alt="search icon"/>
   </form>
   </nav>
   <NewsContainer search={search} filter={filter}/>
   </>
    )}
  </div>
);

};

export default Navbar;
