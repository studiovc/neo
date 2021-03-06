import BlogContainer           from './blog/Container.mjs';
import Container               from '../../../src/container/Base.mjs';
import ExamplesList            from './examples/List.mjs';
import ExamplesTabContainer    from './examples/TabContainer.mjs';
import HeaderContainer         from './HeaderContainer.mjs';
import HomeTabContainer        from './home/TabContainer.mjs';
import MainContainerController from './MainContainerController.mjs';
import TabContainer            from '../../../src/tab/Container.mjs';
import Viewport                from '../../../src/container/Viewport.mjs';

/**
 * @class Website.view.MainContainer
 * @extends Neo.container.Viewport
 */
class MainContainer extends Viewport {
    static getConfig() {return {
        /**
         * @member {String} className='Website.view.MainContainer'
         * @protected
         */
        className: 'Website.view.MainContainer',
        /**
         * @member {Boolean} autoMount=true
         */
        autoMount: true,
        /**
         * @member {String[]} cls=['website-header-container']
         */
        cls: ['website-main-container', 'neo-viewport'],
        /**
         * @member {Neo.controller.Component} controller=MainContainerController
         */
        controller: MainContainerController,
        /**
         * @member {Object} layout={ntype: 'hbox', align: 'stretch'}
         */
        layout: {ntype: 'hbox', align: 'stretch'},
        /**
         * @member {Array} items
         */
        items: [{
            module: Container,
            cls   : ['website-center-region'],
            layout: {ntype: 'vbox', align: 'stretch'},
            items : [{
                module   : HeaderContainer,
                flex     : 'none',
                reference: 'header-container'
            }, {
                module   : TabContainer,
                cls      : ['website-main-tabcontainer', 'neo-tab-container'],
                flex     : 1,
                reference: 'main-tab-container',

                items: [{
                    module         : HomeTabContainer,
                    reference      : 'home-tab-container',
                    tabButtonConfig: {
                        editRoute: false,
                        iconCls  : 'fa fa-home',
                        route    : 'mainview=home',
                        text     : 'Home'
                    }
                }, {
                    module         : BlogContainer,
                    tabButtonConfig: {
                        editRoute: false,
                        iconCls  : 'fa fa-rss',
                        route    : 'mainview=blog',
                        text     : 'Blog'
                    }
                }, {
                    module         : ExamplesTabContainer,
                    reference      : 'examples-tab-container',
                    tabButtonConfig: {
                        editRoute: false,
                        iconCls  : 'fa fa-images',
                        route    : 'mainview=examples',
                        text     : 'Examples'
                    }
                }, {
                    module         : ExamplesList,
                    reference      : 'docs-list',
                    storeUrl       : '../../apps/website/data/docs.json',
                    tabButtonConfig: {
                        editRoute: false,
                        iconCls  : 'fa fa-hands-helping',
                        route    : 'mainview=docs',
                        text     : 'Docs'
                    }
                }]
            }]
        }]
    }}
}

Neo.applyClassConfig(MainContainer);

export {MainContainer as default};