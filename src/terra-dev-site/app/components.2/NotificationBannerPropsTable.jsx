import React from 'react';
import PropTypes from 'prop-types';

/* eslint-disable react/no-unused-prop-types */
const propTypes = {
  /**
   * The text and corresponding callback to populate the action button of the banner.
   */
  bannerAction: PropTypes.shape({
    /**
     * The text to display in the banner button.
     */
    text: PropTypes.string,
    /**
     * The callback function triggered when the action button is clicked. No parameters are passed.
     */
    onClick: PropTypes.func,
  }),
  /**
   * The message content to display in the banner.
   */
  description: PropTypes.node,
  /**
   * Callback function triggered when the dismiss button is clicked. The presence of this prop will cause
   * the dismiss button to be included on the banner. No parameters are passed.
   */
  onRequestClose: PropTypes.func,
  /**
   * The variant of alert to be rendered. One of `hazard-high`, `hazard-medium`, `hazard-low`, `error`, `unsatisfied`, `unverified` or `custom`.
   */
  variant: PropTypes.oneOf(['hazard-high', 'hazard-medium', 'hazard-low', 'error', 'unsatisfied', 'unverified', 'custom']).isRequired,
};
/* eslint-enable react/no-unused-prop-types */

const PropTypesExample = () => <div />;

PropTypesExample.propTypes = propTypes;

export default PropTypesExample;