const React = require("react");

exports.onRenderBody = function({ setHeadComponents, setPreBodyComponents }) {

    setHeadComponents([
        <script
        dangerouslySetInnerHTML={{
            __html:`
            window._mNHandle = window._mNHandle || {};
            window._mNHandle.queue = window._mNHandle.queue || [];
            medianet_versionId = "3121199";
            `
        }}
    />,
    <script src="//contextual.media.net/dmedianet.js?cid=8CUVUWCU4" async="async" />
    ]);

    setPreBodyComponents([
            <div id="255758264">
                <script
                    dangerouslySetInnerHTML={{
                        __html:`
                        try {
                            window._mNHandle.queue.push(function (){
                                window._mNDetails.loadTag("255758264", "728x90", "255758264");
                            });
                        }
                        catch (error) {}
                        `
                    }}
                />
            </div>
    ]);


};
