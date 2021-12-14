/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

// @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  //tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually

  tutorialSidebar: [
    'intro',
    {
      type: 'category',
      label: 'Vendor',
      items: [
        {
          type: 'category',
          label: 'Quickstarts',
          items: [
            'vendor/quickstart-without-existing-cluster',
            'vendor/quickstart-existing-cluster',
            'vendor/quickstart-cli',
          ],
        },
        {
          type: 'category',
          label: 'Getting started',
          items: [
            'vendor/getting-started-vendor-account',
            'vendor/installing-replicated-vendor-cli',
            'vendor/packaging-an-app',
            'vendor/packaging-custom-resources',
            'vendor/packaging-customers-and-licenses',
            'vendor/packaging-embedded-kubernetes',
            'vendor/packaging-private-images',
            'vendor/packaging-template-functions',
            'vendor/packaging-include-resources',
            'vendor/packaging-ingress',
            'vendor/packaging-using-tls-certs',
            'vendor/packaging-cleaning-up-jobs',
            'vendor/packaging-rbac',
            'vendor/packaging-vulnerability-patch-policy',
          ],
        },
        {
          type: 'category',
          label: 'Channels and Releases',
          items: [
            'vendor/releases-understanding',
            'vendor/releases-creating-channels',
            'vendor/releases-creating-releases',
            'vendor/releases-promoting',
            'vendor/releases-updating',
          ],
        },
        {
          type: 'category',
          label: 'Licenses and entitlements',
          items: [
            'vendor/licenses-and-entitlements-about',
            'vendor/entitlements-built-in-using',
            'vendor/entitlements-creating-new',
            'vendor/entitlements-community-using',
          ],
        },
        {
          type: 'doc',
          id: 'vendor/identity-service-configuring',
        },
        {
          type: 'category',
          label: 'Helm',
          items: [
            'vendor/helm-overview',
            'vendor/helm-chart-components',
            'vendor/helm-applications',
            'vendor/helm-optional-charts',
            'vendor/helm-optional-value-keys',
            'vendor/helm-airgap-builder',
            'vendor/helm-installing-native-helm',
            'vendor/helm-native-helm-install-order',
            'vendor/helm-installing-replicated-helm',
            'vendor/helm-processing',
          ],
        },
        {
          type: 'category',
          label: 'Snapshots',
          items: [
            'vendor/snapshots-overview',
            'vendor/snapshots-configuring-backups',
            'vendor/snapshots-backup-hooks',
          ],
        },
        {
          type: 'category',
          label: 'Customizing the admin console',
          items: [
            'vendor/admin-console-customize-config-screen',
            'vendor/admin-console-customize-app-icon',
            'vendor/admin-console-display-app-status',
            'vendor/admin-console-port-forwarding',
            'vendor/admin-console-prometheus-monitoring',
          ],
        },
        {
          type: 'category',
          label: 'Packaging a Kubernetes operator application',
          items: [
            'vendor/operator-packaging-about',
            'vendor/operator-defining-additional-images',
            'vendor/operator-referencing-images',
            'vendor/operator-defining-additional-namespaces',
          ],
        },
        {
          type: 'category',
          label: 'Tutorials',
          items: [
            'vendor/tutorial-existing-cluster',
          ],
        },
        {
          type: 'link',
          label: 'KOTS CLI Documentation',
          href: 'https://kots.io/kots-cli/getting-started/'
        },
      ],
    },
    {
      type: 'category',
      label: 'Enterprise',
      items: [
        {
          type: 'category',
          label: 'Dropdown Label',
          items: [
            'enterprise/hello-world-2',
            'enterprise/hello-universe-2',
          ],
        },
      ],
    },
  ],
};

module.exports = sidebars;
