// import React, {Component} from 'react';
// import CardsService from '../cards-service/cards-service.component';
// import ImageUploader from 'react-images-upload';
//
//
// class CardsCreateUpdate extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {pictures: []};
//         this.onDrop = this.onDrop.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }
//
//     onDrop(picture) {
//         this.setState({
//             pictures: this.state.pictures.concat(picture),
//         });
//     }
//
//     componentDidMount() {
//         const {match: {params}} = this.props;
//         if (params && params.pk) {
//             cardsService.getCard(params.pk).then((c) => {
//                 this.refs.name.value = c.name;
//                 this.refs.description.value = c.description;
//                 this.refs.image = c.image;
//                 this.refs.price.value = c.price;
//             })
//         }
//     }
//
//     handleCreate() {
//         cardsService.createCard(
//             {
//                 "name": this.refs.name.value,
//                 "description": this.refs.description.value,
//                 "image": this.refs.image.value,
//                 "price": this.refs.price.value
//             }
//         ).then((result) => {
//             alert("Card created!");
//         }).catch(() => {
//             alert('There was an error! Please re-check your form.');
//         });
//     }
//
//     handleUpdate(pk) {
//         cardsService.updateCard(
//             {
//                 "pk": pk,
//                 "name": this.refs.name.value,
//                 "description": this.refs.description.value,
//                 "image": this.refs.image.value,
//                 "price": this.refs.price.value
//             }
//         ).then((result) => {
//             console.log(result);
//             alert("Card updated!");
//         }).catch(() => {
//             alert('There was an error! Please re-check your form.');
//         });
//     }
//
//     handleSubmit(event) {
//         const {match: {params}} = this.props;
//
//         if (params && params.pk) {
//             this.handleUpdate(params.pk);
//         } else {
//             this.handleCreate();
//         }
//
//         event.preventDefault();
//     }
//
//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <div className="form-group">
//                     <label>Name:</label>
//                     <input className="form-control" type="text" ref='name'/>
//
//                     <label>Description:</label>
//                     <textarea className="form-control" ref='description'></textarea>
//
//                     <label>Image:</label>
//                     <ImageUploader
//                         withIcon={true}
//                         buttonText='Choose images'
//                         onChange={this.onDrop}
//                         imgExtension={['.jpg', '.gif', '.png', '.gif']}
//                         maxFileSize={5242880}
//                     />
//
//                     <label>Price:</label>
//                     <input className="form-control" type="text" ref='price'/>
//
//                     <input className="btn btn-primary" type="submit" value="Submit"/>
//                 </div>
//             </form>
//         );
//     }
// }
//
// export default CardsCreateUpdate;