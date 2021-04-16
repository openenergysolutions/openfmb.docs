
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
  exact: true,
},
{
  path: '/__docusaurus/debug',
  component: ComponentCreator('/__docusaurus/debug','3d6'),
  exact: true,
},
{
  path: '/__docusaurus/debug/config',
  component: ComponentCreator('/__docusaurus/debug/config','914'),
  exact: true,
},
{
  path: '/__docusaurus/debug/content',
  component: ComponentCreator('/__docusaurus/debug/content','c28'),
  exact: true,
},
{
  path: '/__docusaurus/debug/globalData',
  component: ComponentCreator('/__docusaurus/debug/globalData','3cf'),
  exact: true,
},
{
  path: '/__docusaurus/debug/metadata',
  component: ComponentCreator('/__docusaurus/debug/metadata','31b'),
  exact: true,
},
{
  path: '/__docusaurus/debug/registry',
  component: ComponentCreator('/__docusaurus/debug/registry','0da'),
  exact: true,
},
{
  path: '/__docusaurus/debug/routes',
  component: ComponentCreator('/__docusaurus/debug/routes','244'),
  exact: true,
},
{
  path: '/blog',
  component: ComponentCreator('/blog','438'),
  exact: true,
},
{
  path: '/blog/hello-world',
  component: ComponentCreator('/blog/hello-world','3de'),
  exact: true,
},
{
  path: '/blog/hola',
  component: ComponentCreator('/blog/hola','f60'),
  exact: true,
},
{
  path: '/blog/tags',
  component: ComponentCreator('/blog/tags','eca'),
  exact: true,
},
{
  path: '/blog/tags/docusaurus',
  component: ComponentCreator('/blog/tags/docusaurus','c2e'),
  exact: true,
},
{
  path: '/blog/tags/facebook',
  component: ComponentCreator('/blog/tags/facebook','466'),
  exact: true,
},
{
  path: '/blog/tags/hello',
  component: ComponentCreator('/blog/tags/hello','c79'),
  exact: true,
},
{
  path: '/blog/tags/hola',
  component: ComponentCreator('/blog/tags/hola','908'),
  exact: true,
},
{
  path: '/blog/welcome',
  component: ComponentCreator('/blog/welcome','905'),
  exact: true,
},
{
  path: '/markdown-page',
  component: ComponentCreator('/markdown-page','be1'),
  exact: true,
},
{
  path: '/docs',
  component: ComponentCreator('/docs','b3c'),
  
  routes: [
{
  path: '/docs/adapter/cli',
  component: ComponentCreator('/docs/adapter/cli','43a'),
  exact: true,
},
{
  path: '/docs/adapter/config',
  component: ComponentCreator('/docs/adapter/config','347'),
  exact: true,
},
{
  path: '/docs/adapter/extending',
  component: ComponentCreator('/docs/adapter/extending','f43'),
  exact: true,
},
{
  path: '/docs/adapter/index',
  component: ComponentCreator('/docs/adapter/index','211'),
  exact: true,
},
{
  path: '/docs/adapter/misc/scheduling',
  component: ComponentCreator('/docs/adapter/misc/scheduling','364'),
  exact: true,
},
{
  path: '/docs/adapter/misc/self-signed',
  component: ComponentCreator('/docs/adapter/misc/self-signed','e22'),
  exact: true,
},
{
  path: '/docs/adapter/native-plugins/dds',
  component: ComponentCreator('/docs/adapter/native-plugins/dds','6e0'),
  exact: true,
},
{
  path: '/docs/adapter/native-plugins/mqtt',
  component: ComponentCreator('/docs/adapter/native-plugins/mqtt','9cd'),
  exact: true,
},
{
  path: '/docs/adapter/native-plugins/nats',
  component: ComponentCreator('/docs/adapter/native-plugins/nats','b81'),
  exact: true,
},
{
  path: '/docs/adapter/other-plugins/capture-replay',
  component: ComponentCreator('/docs/adapter/other-plugins/capture-replay','a01'),
  exact: true,
},
{
  path: '/docs/adapter/other-plugins/log',
  component: ComponentCreator('/docs/adapter/other-plugins/log','828'),
  exact: true,
},
{
  path: '/docs/adapter/protocol-plugins/dnp3/master',
  component: ComponentCreator('/docs/adapter/protocol-plugins/dnp3/master','222'),
  exact: true,
},
{
  path: '/docs/adapter/protocol-plugins/dnp3/outstation',
  component: ComponentCreator('/docs/adapter/protocol-plugins/dnp3/outstation','532'),
  exact: true,
},
{
  path: '/docs/adapter/protocol-plugins/goose',
  component: ComponentCreator('/docs/adapter/protocol-plugins/goose','15e'),
  exact: true,
},
{
  path: '/docs/adapter/protocol-plugins/modbus/master',
  component: ComponentCreator('/docs/adapter/protocol-plugins/modbus/master','0a5'),
  exact: true,
},
{
  path: '/docs/adapter/protocol-plugins/modbus/outstation',
  component: ComponentCreator('/docs/adapter/protocol-plugins/modbus/outstation','af2'),
  exact: true,
},
{
  path: '/docs/adapter/protos',
  component: ComponentCreator('/docs/adapter/protos','256'),
  exact: true,
},
{
  path: '/docs/adapter/schemas',
  component: ComponentCreator('/docs/adapter/schemas','434'),
  exact: true,
},
{
  path: '/docs/intro',
  component: ComponentCreator('/docs/intro','e84'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/congratulations',
  component: ComponentCreator('/docs/tutorial-basics/congratulations','7ef'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/create-a-blog-post',
  component: ComponentCreator('/docs/tutorial-basics/create-a-blog-post','2c8'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/create-a-document',
  component: ComponentCreator('/docs/tutorial-basics/create-a-document','f0d'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/create-a-page',
  component: ComponentCreator('/docs/tutorial-basics/create-a-page','ca5'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/deploy-your-site',
  component: ComponentCreator('/docs/tutorial-basics/deploy-your-site','508'),
  exact: true,
},
{
  path: '/docs/tutorial-basics/markdown-features',
  component: ComponentCreator('/docs/tutorial-basics/markdown-features','f90'),
  exact: true,
},
{
  path: '/docs/tutorial-extras/manage-docs-versions',
  component: ComponentCreator('/docs/tutorial-extras/manage-docs-versions','d64'),
  exact: true,
},
{
  path: '/docs/tutorial-extras/translate-your-site',
  component: ComponentCreator('/docs/tutorial-extras/translate-your-site','16a'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
