import React from 'react';

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      numberOfProjects: 10,
      yearsOfExperience: 300,
      responseRate: '100%',
      reviews: 150,
      rating: 5,
    };
  }

  render() {
    return (
      <div className="w-full h-[90]">
        <h1>Welcome, {this.state.name}</h1>
        <div className="volunteer-profile">
          <img src="volunteer_image.jpg" alt="Volunteer" />
          <h2>Full Name of the volunteer</h2>
          <p>Qualifications of the volunteer</p>
          <div className="rating">
            {/* Here you would typically have a component or logic to display the stars */}
            <span>{this.state.rating} ({this.state.reviews} reviews)</span>
          </div>
          <div className="details">
            <p>Number of Projects: {this.state.numberOfProjects}</p>
            <p>Years of experience: {this.state.yearsOfExperience}</p>
            <p>Req. response rate: {this.state.responseRate}</p>
          </div>
          <button onClick={() => this.props.editProfile()}>Edit Profile</button>
        </div>
        {/* ... Rest of the dashboard components */}
      </div>
    );
  }
}

export default Dashboard;