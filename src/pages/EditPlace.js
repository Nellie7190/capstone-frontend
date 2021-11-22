import { useState } from "react";
import { useParams } from "react-router";
import { Navigate } from "react-router";

const EditPlace = (props) => {
    let { id, name } = useParams()
    console.log(name)
    // console.log(props.editPlace)
    const place = props.places.find(place => place.name === name)
    console.log(place)
    const [editForm, setEditForm] = useState(place);

    const handleChange = evt => {
        setEditForm({...editForm, [evt.target.name]: evt.target.value });
        // Navigate(-1)
    }

    const handleSubmit = evt => {
        evt.preventDefault();
        props.editPlace(editForm, id);
        console.log(place.name)
        // Navigate(-1)
    }

    return (
        <section>
            <form onSubmit={handleSubmit}>
                <h3>Required</h3>
                Name
                <input 
                    type="text"
                    name="name"
                    required='True'
                    value={editForm.name}
                    placeholder="Type a PLACE"
                    onChange={handleChange}
                /><br />
                Address
                <input
                    type="text"
                    name="address"
                    required='True'
                    value={editForm.address}
                    placeholder="Type ADDRESS"
                    onChange={handleChange}
                /><br />
                <h3>Optional</h3>
                Image
                <input
                    type="text"
                    name="image"
                    value={editForm.image}
                    placeholder="Type IMAGE"
                    onChange={handleChange}
                /><br />
                Is this place Black Owned?
                <input
                    type="checkbox"
                    name="isBlackOwned"
                    value={editForm.isBlackOwned}
                    onChange={handleChange}
                /><br />
                Is this place Woman Owned?
                <input
                    type="checkbox"
                    name="isWomanOwned"
                    value={editForm.isWomanOwned}
                    onChange={handleChange}
                /><br />
                Is this place owned by member of ENM community??
                <input
                    type="checkbox"
                    name="isENMOwned"
                    value={editForm.isENMOwned}
                    onChange={handleChange}
                /><br />
                Is this place owned by member of LGBTQIA+ community?
                <input 
                    type="checkbox"
                    name="isLCOMOwned"
                    value={editForm.isLCOMOwned}
                    onChange={handleChange}
                /><br />
                Does this place allow pets?
                <input
                    type="checkbox"
                    name="allowsPets"
                    value={editForm.allowsPets}
                    onChange={handleChange}
                /><br />
                Do you know the hours of this place?
                <input
                    type="text"
                    name="hoursOpen"
                    placeholder="HOURS"
                    value={editForm.hoursOpen}
                    onChange={handleChange}
                />
                <input type='submit' value="Submit Edit" />
            </form>
        </section>
    )
}

export default EditPlace
