// import {
// 	Marker,
// 	//InfoWindow
// } from "react-google-maps";
import React from 'react';
import { Map, GoogleApiWrapper, Marker, InfoWindow } from 'google-maps-react';
import './styles/Map.css';
import customStyle from "../components/styles/mapStyles";
import { textsDb } from '../db/textsDB';

export class Maps extends React.Component {
	state = {
		selectedObject: null,
	}

	closeMap = () => {
		this.props.closeMap();
	}

	stopPropagation = (e) => {
		e.stopPropagation();
	}
	// openInfoWindow = (object) => {
	// 	console.log(object);
	// 	this.setState({selectedObject: object});

	// }
	// closeInfoWindow = () => {
	// 	console.log(this.state.selectedObject);
	// 	this.setState({selectedObject: null});
	// }

	render() {
		const {selectedObject} = this.state;
		// const mapStyles = {
		// 	width: "100%",
		// 	height: "100%",
		// 	margin: 'auto auto'
		// };
		return (

			<div className='map'
				style={this.props.showMap ? { display: 'flex' } : { display: 'none' }}
				onClick={this.closeMap}
			>
				<div
					className='map-wrapper'
					onClick={this.stopPropagation} >
					<Map
						google={this.props.google}
						zoom={15}
						disableDefaultUI = {true}
						styles={customStyle}
						initialCenter={{ lat: 55.79125121022339, lng: 27.449522803627833 }}
					>
						{textsDb.map(object => (
							<Marker
								onClick={() => this.props.changeScreen(object.id)}
								//onClick={() => this.openInfoWindow(object)}
								key={object.id}
								position={{
									lat: object.coordinates.lat,
									lng: object.coordinates.lng
								}}
							/>
						))}

						{/* {selectedObject && (
							<InfoWindow
								onClick={this.closeInfoWindow}
								position={{
									lat: selectedObject.coordinates.lat,
									lng: selectedObject.coordinates.lng
								}}
							>
								<div>
									<h2>{selectedObject.slogan}</h2>
									<p>{selectedObject.name2}</p>
									<p onClick={() => this.props.changeScreen(selectedObject.id)}>посмотреть</p>
								</div>
							</InfoWindow>
						)} */}
					</Map>
				</div>
			</div>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: 'AIzaSyBHeYDMsU6Imx1i8-bQblbLLy8ZQSRbW3s',
	language: "RU"
})(Maps);