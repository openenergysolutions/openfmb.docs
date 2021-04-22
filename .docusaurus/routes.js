
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/',
  component: ComponentCreator('/','deb'),
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
  component: ComponentCreator('/docs','8c4'),
  
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
  path: '/docs/tutorial/intro',
  component: ComponentCreator('/docs/tutorial/intro','800'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
