import React, {Component} from 'react'
import Table from '@material-ui/core/Table'

class AllCourses extends Component{

    constructor(props){
        super(props);

        this.state = {
            courses: []
        };
    }

    fetchCourses(){
        var that = this;
        fetch('http://localhost:8080/courses').then(function (response) {
            return response.json();
        }).then(function (result) {
            that.setState({
                courses: result
            });
        });
    }

    componentWillMount(){
        this.fetchCourses();
    }

    render(){
        return(
            <div>
                <h1>Courses</h1>
                <div>
                    {this.state.courses.map(function (course, index) {
                        return(<h3 keys={index}>{course.title}</h3>)
                    })}
                </div>
            </div>
        );
    }

}

export default AllCourses;