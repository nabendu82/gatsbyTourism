const React = require("react");

exports.onRenderBody = function({ setHeadComponents, setPostBodyComponents, setPreBodyComponents }) {

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
            <div style={{maxWidth: '54vw', margin: '0 auto'}} id="356636763">
                <script
                    dangerouslySetInnerHTML={{
                        __html:`
                        try {
                            window._mNHandle.queue.push(function (){
                                window._mNDetails.loadTag("356636763", "728x90", "356636763");
                            });
                        }
                        catch (error) {}
                        `
                    }}
                />
            </div>
    ]);

    setPostBodyComponents([
        <React.Fragment>
            <div style={{display: 'flex', alignItem: 'center', justifyContent: 'center' }} id="104240845">
                <script
                    dangerouslySetInnerHTML={{
                        __html:`
                        try {
                            window._mNHandle.queue.push(function (){
                                window._mNDetails.loadTag("104240845", "300x250", "104240845");
                            });
                        }
                        catch (error) {}
                        `
                    }}
                />
            </div>
            <div id="172542266">
                <script
                    dangerouslySetInnerHTML={{
                        __html:`
                        try {
                            window._mNHandle.queue.push(function (){
                                window._mNDetails.loadTag("172542266", "320x50", "172542266");
                            });
                        }
                        catch (error) {}
                        `
                    }}
                />
            </div>
        </React.Fragment>
    ]);

};
