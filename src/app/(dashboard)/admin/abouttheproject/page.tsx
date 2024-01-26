import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import  SampleMap from "@/components/maps/SampleMap";
import { provinces, cities, suburbs, municipalities } from './data';
// import React, { useState } from "react";

const page = async () => {
     const session = await getServerSession(authOptions);
    // const [selectedProvince, setSelectedProvince] = useState('');
    // const [selectedCity, setSelectedCity] = useState('');
    // const [selectedSuburb, setSelectedSuburb] = useState('');
    // const [selectedMunicipality, setSelectedMunicipality] = useState('');

    // const handleProvinceChange = (e: any) => {
    //   setSelectedProvince(e.target.value);
    //   setSelectedCity('');
    //   setSelectedSuburb('');
    //   setSelectedMunicipality('');
    // };

    // const handleCityChange = (e:any) => {
    //   setSelectedCity(e.target.value);
    //   setSelectedSuburb('');
    //   setSelectedMunicipality('');
    // };

    // const handleSuburbChange = (e:any) => {
    //   setSelectedSuburb(e.target.value);
    //   setSelectedMunicipality('');
    // };

    // const handleMunicipalityChange = (e:any) => {
    //   setSelectedMunicipality(e.target.value);
    // };
    if(session?.user){
        return (
          <>
            {/* <div>
      <h1>South Africa Location Dropdowns</h1>

     
      <label>Province:</label>
      <select value={selectedProvince} onChange={handleProvinceChange}>
        <option value="">Select Province</option>
        {provinces.map((province) => (
          <option key={province} value={province}>
            {province}
          </option>
        ))}
      </select>

     
      {selectedProvince && (
        <>
          <label>City:</label>
          <select value={selectedCity} onChange={handleCityChange}>
            <option value="">Select City</option>
            {cities[selectedProvince].map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>
        </>
      )}

     
      {selectedCity && (
        <>
          <label>Suburb:</label>
          <select value={selectedSuburb} onChange={handleSuburbChange}>
            <option value="">Select Suburb</option>
            {suburbs[selectedCity].map((suburb) => (
              <option key={suburb} value={suburb}>
                {suburb}
              </option>
            ))}
          </select>
        </>
      )}

     
      {selectedSuburb && (
        <>
          <label>Municipality:</label>
          <select value={selectedMunicipality} onChange={handleMunicipalityChange}>
            <option value="">Select Municipality</option>
            {municipalities[selectedSuburb].map((municipality) => (
              <option key={municipality} value={municipality}>
                {municipality}
              </option>
            ))}
          </select>
        </>
      )}

      
      {selectedMunicipality && (
        <div>
          <h2>Selected Location:</h2>
          <p>Province: {selectedProvince}</p>
          <p>City: {selectedCity}</p>
          <p>Suburb: {selectedSuburb}</p>
          <p>Municipality: {selectedMunicipality}</p>
        </div>
      )}
    </div> */}
          </>
        )
      }
    return <h2 className="text-2xl">Please login to see this your page</h2>
}

export default page;

