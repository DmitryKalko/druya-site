// import {
// 	Marker,
// 	//InfoWindow
// } from "react-google-maps";
import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import './styles/Map.css';
import customStyle from "../components/styles/mapStyles";
import { textsDb } from '../db/textsDB';


export class Maps extends React.Component {
	state = {
		//selectedObject: null,
		//id: this.props.currentId
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
		//const {selectedObject} = this.state;
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
						disableDefaultUI={true}
						styles={customStyle}
						initialCenter={{ lat: 55.79072039312701, lng: 27.444802112550597 }}
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
								title={object.slogan}
								icon={this.props.currentId === object.id ?
									{
										url: process.env.PUBLIC_URL + '/images/geo.svg',
										scaledSize: new this.props.google.maps.Size(100, 100)
									}
									:
									{
										url: process.env.PUBLIC_URL + '/images/geo.svg',
										scaledSize: new this.props.google.maps.Size(62, 62)
									}
								}
							/>
						))}
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