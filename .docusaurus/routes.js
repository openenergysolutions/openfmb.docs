
import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';
export default [
{
  path: '/openfmb.docs/',
  component: ComponentCreator('/openfmb.docs/','bd8'),
  exact: true,
},
{
  path: '/openfmb.docs/blog',
  component: ComponentCreator('/openfmb.docs/blog','d08'),
  exact: true,
},
{
  path: '/openfmb.docs/blog/hello-world',
  component: ComponentCreator('/openfmb.docs/blog/hello-world','903'),
  exact: true,
},
{
  path: '/openfmb.docs/blog/hola',
  component: ComponentCreator('/openfmb.docs/blog/hola','a8b'),
  exact: true,
},
{
  path: '/openfmb.docs/blog/tags',
  component: ComponentCreator('/openfmb.docs/blog/tags','125'),
  exact: true,
},
{
  path: '/openfmb.docs/blog/tags/docusaurus',
  component: ComponentCreator('/openfmb.docs/blog/tags/docusaurus','b89'),
  exact: true,
},
{
  path: '/openfmb.docs/blog/tags/facebook',
  component: ComponentCreator('/openfmb.docs/blog/tags/facebook','227'),
  exact: true,
},
{
  path: '/openfmb.docs/blog/tags/hello',
  component: ComponentCreator('/openfmb.docs/blog/tags/hello','ac0'),
  exact: true,
},
{
  path: '/openfmb.docs/blog/tags/hola',
  component: ComponentCreator('/openfmb.docs/blog/tags/hola','1dc'),
  exact: true,
},
{
  path: '/openfmb.docs/blog/welcome',
  component: ComponentCreator('/openfmb.docs/blog/welcome','2b9'),
  exact: true,
},
{
  path: '/openfmb.docs/markdown-page',
  component: ComponentCreator('/openfmb.docs/markdown-page','2e3'),
  exact: true,
},
{
  path: '/openfmb.docs/docs',
  component: ComponentCreator('/openfmb.docs/docs','33f'),
  
  routes: [
{
  path: '/openfmb.docs/docs/adapter/cli',
  component: ComponentCreator('/openfmb.docs/docs/adapter/cli','20e'),
  exact: true,
},
{
  path: '/openfmb.docs/docs/adapter/config',
  component: ComponentCreator('/openfmb.docs/docs/adapter/config','37e'),
  exact: true,
},
{
  path: '/openfmb.docs/docs/adapter/extending',
  component: ComponentCreator('/openfmb.docs/docs/adapter/extending','a11'),
  exact: true,
},
{
  path: '/openfmb.docs/docs/adapter/index',
  component: ComponentCreator('/openfmb.docs/docs/adapter/index','818'),
  exact: true,
},
{
  path: '/openfmb.docs/docs/adapter/misc/scheduling',
  component: ComponentCreator('/openfmb.docs/docs/adapter/misc/scheduling','6e3'),
  exact: true,
},
{
  path: '/openfmb.docs/docs/adapter/misc/self-signed',
  component: ComponentCreator('/openfmb.docs/docs/adapter/misc/self-signed','c1f'),
  exact: true,
},
{
  path: '/openfmb.docs/docs/adapter/native-plugins/dds',
  component: ComponentCreator('/openfmb.docs/docs/adapter/native-plugins/dds','37f'),
  exact: true,
},
{
  path: '/openfmb.docs/docs/adapter/native-plugins/mqtt',
  component: ComponentCreator('/openfmb.docs/docs/adapter/native-plugins/mqtt','0b9'),
  exact: true,
},
{
  path: '/openfmb.docs/docs/adapter/native-plugins/nats',
  component: ComponentCreator('/openfmb.docs/docs/adapter/native-plugins/nats','750'),
  exact: true,
},
{
  path: '/openfmb.docs/docs/adapter/other-plugins/capture-replay',
  component: ComponentCreator('/openfmb.docs/docs/adapter/other-plugins/capture-replay','c04'),
  exact: true,
},
{
  path: '/openfmb.docs/docs/adapter/other-plugins/log',
  component: ComponentCreator('/openfmb.docs/docs/adapter/other-plugins/log','10b'),
  exact: true,
},
{
  path: '/openfmb.docs/docs/adapter/protocol-plugins/dnp3/master',
  component: ComponentCreator('/openfmb.docs/docs/adapter/protocol-plugins/dnp3/master','2a0'),
  exact: true,
},
{
  path: '/openfmb.docs/docs/adapter/protocol-plugins/dnp3/outstation',
  component: ComponentCreator('/openfmb.docs/docs/adapter/protocol-plugins/dnp3/outstation','d8c'),
  exact: true,
},
{
  path: '/openfmb.docs/docs/adapter/protocol-plugins/modbus/master',
  component: ComponentCreator('/openfmb.docs/docs/adapter/protocol-plugins/modbus/master','cdc'),
  exact: true,
},
{
  path: '/openfmb.docs/docs/adapter/protocol-plugins/modbus/outstation',
  component: ComponentCreator('/openfmb.docs/docs/adapter/protocol-plugins/modbus/outstation','5cf'),
  exact: true,
},
{
  path: '/openfmb.docs/docs/adapter/protos',
  component: ComponentCreator('/openfmb.docs/docs/adapter/protos','c9f'),
  exact: true,
},
{
  path: '/openfmb.docs/docs/adapter/schemas',
  component: ComponentCreator('/openfmb.docs/docs/adapter/schemas','007'),
  exact: true,
},
{
  path: '/openfmb.docs/docs/tutorial/intro',
  component: ComponentCreator('/openfmb.docs/docs/tutorial/intro','2ce'),
  exact: true,
},
]
},
{
  path: '*',
  component: ComponentCreator('*')
}
];
