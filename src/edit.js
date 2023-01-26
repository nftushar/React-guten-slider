import { useBlockProps } from '@wordpress/block-editor';
import { __experimentalBoxControl as BoxControl } from '@wordpress/components';
import { SelectControl } from '@wordpress/components';
import { __ } from '@wordpress/i18n';
import {
  InspectorControls,
  ColorPalette
} from '@wordpress/block-editor';


import { useState } from '@wordpress/element';
import { Panel, PanelBody, PanelRow } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  // console.log(attributes);
  const { sliderPadding } = attributes;
  const { sliderMargin } = attributes;

  // const [values, setValues] = useState({
  //   top: '50px',
  //   left: '10%',
  //   right: '10%',
  //   bottom: '50px',
  // });
  return (
    <div {...useBlockProps()}>

      <h2>HEllO</h2>

      <InspectorControls key="setting">
        <Panel header="My Panel">
          <PanelBody title="My Block Settings" initialOpen={true}>
            <PanelRow>
              <BoxControl
              label={"Slider Padding"}
                values={sliderPadding}

                resetValues={{top:'11px',left:'12',buttom:'13px',right:'14px'}}

                onChange={(nextValues) => setAttributes({ sliderPadding: nextValues })}
              />
            </PanelRow>
            <PanelRow>
              <BoxControl
              label={"Slider Margin"}
                values={sliderMargin}

                resetValues={{top:'13px',left:'32',buttom:'43px',right:'54px'}}

                onChange={(nextValues) => setAttributes({ sliderMargin: nextValues })}
              />
            </PanelRow>
          </PanelBody>
        </Panel>
      </InspectorControls>

    </div>

  );
};
