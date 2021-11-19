import React, { useState } from 'react'

const CreatePlace = (props) => {
    // const place = props.place

    const [place, setPlace] = useState({
        name: '',
        address: '',
        isBlackOwned: '',
        isWomanOwned: '',
        isENMOwned: '',
        isLComOwned: '',
        allowsPets: '',
        hoursOpen: '',
    });


    const handleChange = (evt) => {
        setPlace({ ...place, [evt.target.name]: evt.target.value });
    };

    const handleCreateSubmit = (evt) => {
        evt.preventDefault();
        props.createPlace(place)
        setPlace({
            name: '',
            address: '',
            isBlackOwned: '',
            isWomanOwned: '',
            isENMOwned: '',
            isLComOwned: '',
            allowsPets: '',
            hoursOpen: '',
        });
    };

    return (
        <section>
            <form onSubmit={handleCreateSubmit}>
                Name
                <input 
                    type="text"
                    name="name"
                    placeholder="Type a NAME"
                    onChange={handleChange}
                /><br />
                Address
                <input
                    type="text"
                    name="address"
                    placeholder="Type places ADDRESS"
                    onChange={handleChange}
                /><br />
                Is this place Black Owned?
                <input
                    type="checkbox"
                    name="isBlackOwned"
                    onChange={handleChange}
                /><br />
                Is this place Woman Owned?
                <input
                    type="checkbox"
                    name="isWomanOwned"
                    onChange={handleChange}
                /><br />
                Is this place owned by member of ENM community??
                <input
                    type="checkbox"
                    name="isENMOwned"
                    onChange={handleChange}
                /><br />
                Is this place owned by member of LGBTQIA+ community?
                <input 
                    type="checkbox"
                    name="isLCOMOwned"
                    onChange={handleChange}
                /><br />
                Does this place allow pets?
                <input
                    type="checkbox"
                    name="allowsPets"
                    onChange={handleChange}
                /><br />
                Do you know the hours of this place?
                <input
                    type="text"
                    name="hoursOpen"
                    onChange={handleChange}
                />
                <input type='submit' value="+ Add Place" />
            </form>
        </section>
    )
}

export default CreatePlace
