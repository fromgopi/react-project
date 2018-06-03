import React, {Component, Fragment} from 'react'
import Table from '@material-ui/core/Table'
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableHead from '@material-ui/core/TableHead'
import TableBody from '@material-ui/core/TableBody'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles'

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
            <Fragment>
                <h2>Courses</h2>
                <Table className={this.props.classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell>Title</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.courses.map(function (course, index) {
                            return(
                                <TableRow key={index}>
                                    <TableCell component="th" scope="row">{course.title}</TableCell>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </Fragment>
        );
    }
}

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

AllCourses.propsTyps = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(AllCourses);