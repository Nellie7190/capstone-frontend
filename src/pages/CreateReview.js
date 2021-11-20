import { useState } from "react";

const CreateReview = (props) => {
    console.log(props)
    const [review, setReview] = useState({
        isBlackOwned: false,
        isWomanOwned: false,
        isENMOwned: false,
        isLComOwned: false,
        allowsPets: false,
        hoursOpen: '',
        rating: '',
        comment: ''
    });


    const handleChange = (evt) => {
        setReview({ ...review, [evt.target.name]: evt.target.value });
    };

    const handleCreateSubmit = (evt) => {
        evt.preventDefault();
        props.createReview(review)
        setReview({
        rating: '',
        comment: '',
        isBlackOwned: false,
        isWomanOwned: false,
        isENMOwned: false,
        isLComOwned: false,
        allowsPets: false,
        hoursOpen: '',
        
        hoursOpen: '',
        });
    };

    return (
        <section>
            <form onSubmit={handleCreateSubmit}>
                <h3>Required</h3>
                Rating
                <input 
                    type="number"
                    name="rating"
                    placeholder="Rate 1-5"
                    onChange={handleChange}
                /><br />
                Comment
                <input
                    type="textarea"
                    name="comment"
                    placeholder="Why this rating?"
                    onChange={handleChange}
                /><br />
                <h3>Optional</h3>
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
                <input type='submit' value="+ Add Review" />
            </form>
        </section>
    )
}

export default CreateReview