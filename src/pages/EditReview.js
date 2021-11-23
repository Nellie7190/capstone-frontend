import { useState } from "react";
import { useNavigate} from "react-router-dom";
import { useParams } from "react-router";

const EditReview = (props) => {
    let navigate = useNavigate();
    let { id, name} = useParams()
    console.log(props.reviews)
    const review = props.reviews.find(review => review.id === parseInt(id))
    // console.log(props.places)

    const [editForm, setEditForm] = useState(review); //review

    const handleChange = (evt) => {
        setEditForm({ ...editForm, [evt.target.name]: evt.target.value });
        console.log(editForm)
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        props.editReview(editForm, id);
        navigate(-1)
    }

    const loaded = () => {
        return (
            <section>
                    <form onSubmit={handleSubmit}>
                        <h3>Required</h3>
                        {/* Rating */}
                        {/* <select>
                            type="text"
                            name="rating"
                            placeholder="Rate 1-5"
                            onChange={handleChange}
                            <option value="⭐️">⭐️</option>
                            <option value="⭐️⭐️">⭐️⭐️</option>
                            <option value="⭐️⭐️⭐️">⭐️⭐️⭐️</option>
                            <option value="⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️</option>
                            <option value="⭐️⭐️⭐️⭐️⭐️">⭐️⭐️⭐️⭐️⭐️</option>
                            
                        
                        </select> */}
                        Choose User
                        {/* <select>
                            {props.users.map(
                                user => (
                                    <option 
                                    type="text"
                                    name="user"
                                    placeholder="Choose User"
                                    onChange={handleChange} value=''>{user.userName}</option>
                                )
                            )}
                        </select> */}
                        {/* <input 
                        type="hidden"
                        name="place"
                        value={name}
                        onChange={handleChange}
                        />
                        <br /> */}
                        Rating
                        <input 
                        type="number"
                        name="rating"
                        value={editForm.rating}
                        required='True'
                        onChange={handleChange}
                        />
                        <br />
                        Comment
                        <input
                            type="text"
                            name="comment"
                            value={editForm.comment}
                            required='True'
                            placeholder="Why this rating?"
                            onChange={handleChange}
                        /><br />
                        <h3>Optional</h3>
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
                            name="isLComOwned"
                            value={editForm.isLComOwned}
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
                            value={editForm.hoursOpen}
                            onChange={handleChange}
                        />
                        {/* <Link to=''> */}
                            <input type='submit' value="+ Add Review" />
                        {/* </Link> */}
                    </form>
                </section>
        )
    }
    return (
        props.reviews ? loaded() : <h1> Loading ... </h1>
    )
}

export default EditReview;