import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Header, Segment } from 'semantic-ui-react';
import RequestOptionComponent from '../../helpers/RequestOption';
import BreadcrumbComponent from '../../helpers/breadcrumb';
import Styles from '../../../styles/requestSelection';
import mower from '../../../images/pipeline/mower.png';
import rake from '../../../images/pipeline/rake.png';
import snowBlower from '../../../images/pipeline/snowBlower.png';
import custom from '../../../images/pipeline/custom.png';

export const requestSelection = ({ setTypeOfRequest }) => (
  <Grid container>
    <Grid.Row>
      <Segment style={Styles.segment}>
        <BreadcrumbComponent activeStep={0} />
      </Segment>
    </Grid.Row>
    <Grid.Row>
      <Segment style={Styles.segment}>
        <Header as="h2">
          Choose Your Service
          <Header.Subheader>
            Choose a Service for someone to perform
          </Header.Subheader>
        </Header>
      </Segment>
    </Grid.Row>
    <Grid.Row>
      <Segment style={Styles.segment}>
        <RequestOptionComponent
          imageURL={mower}
          title="Lawn Mowing"
          onClick={() => {
            setTypeOfRequest('Lawn Mowing');
          }}
        />
      </Segment>
    </Grid.Row>
    <Grid.Row>
      <Segment style={Styles.segment}>
        <RequestOptionComponent
          imageURL={rake}
          title="Leaf Raking"
          onClick={() => setTypeOfRequest('Leaf Raking')}
        />
      </Segment>
    </Grid.Row>
    <Grid.Row>
      <Segment style={Styles.segment}>
        <RequestOptionComponent
          imageURL={snowBlower}
          title="Snow Clearing"
          onClick={() => setTypeOfRequest('Snow Clearing')}
        />
      </Segment>
    </Grid.Row>
    <Grid.Row>
      <Segment style={Styles.segment}>
        <RequestOptionComponent
          imageURL={custom}
          title="Custom Request"
          onClick={() => setTypeOfRequest('Custom Request')}
        />
      </Segment>
    </Grid.Row>
  </Grid>
);

requestSelection.propTypes = {
  setTypeOfRequest: PropTypes.func.isRequired,
};

export default requestSelection;
