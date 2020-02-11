const React = require("react");

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents }) {

    setHeadComponents([

    ]);

    setPostBodyComponents([
                <script
                    dangerouslySetInnerHTML={{
                        __html:`
                        var infolinks_pid = 3233958;
                        var infolinks_wsid = 1;
                        `
                    }}
                />,
                <script type="text/javascript" src="//resources.infolinks.com/js/infolinks_main.js"></script>
    ]);
};
