# Sharing the License File and Installation Script

This topic describes how to share the license file and installation script with
your customers so that they can install your application.

For more information about how customers use the license file and installation
script to install your application,
see [Overview of installing an application with Replicated app manager](../enterprise/installing-overview).

## Share the License File

After you create a customer, assign the customer to a channel, and define the customer's
license file in the Replicated vendor portal, you can share the license file with your customer.

Your customer uploads the license file to the Replicated admin console when they
are installing your application.

To share the license file with a customer, you can do one of the following:
* Download the license file and send it to your customer directly. See
[Download and share the license file](#download-and-share-the-license-file).
* Send your customer a link to the Replicated download portal where they can download
the license file. See [Share the license file through the download portal](#share-the-license-file-through-the-download-portal).

### Download and Share the License File

To download and share the license file:

1. In the [vendor portal](https://vendor.replicated.com), on the **Customer** page, click on the name of the customer.
1. Click the download license icon on the right side of the row.
1. In the Opening _filename_ dialog, use the Save File default and click **OK**.
    The file is saved to your Downloads folder by default.
1. Send the license file to your customer along with their installation script.
See [Share the installation script](#share-the-installation-script).

### Share the License File through the Download Portal

To share the license file through the download portal:

1. In the [vendor portal](https://vendor.replicated.com), on the **Customer** page, click on the name of the customer.
1. In the **Download portal** section, click **Generate new password**.
1. Save the password that appears in the pop-up window. Your customer uses
this password to log in to the download portal.
1. Click **Copy URL** to copy the URL to the download portal to your clipboard.
This is the URL where your customer can access the download portal.
1. (Optional) Click **Visit download portal** to log in to the download portal
and preview your customer's experience.
1. Send the URL and password for the download portal to your customer along with
their installation script. See [Share the installation script](#share-the-installation-script).

## Share the Installation Script

In the vendor portal, Replicated provides installation scripts that your customer
can use to install your application.

There are installation scripts unique to each channel. Within each channel, there
is a script for installations on an existing cluster and for installations
on a Kubernetes installer-created cluster (embedded cluster).

To locate and share the installation script with your customer:

1. In the [vendor portal](https://vendor.replicated.com), on the **Channels** page, find the channel to which the
customer is assigned.
1. Under **Install**:
   * Click **Existing Cluster** if your customer will install your application on
   an existing Kubernetes cluster.
   * Click **Embedded Cluster** if your customer does not have an existing Kubernetes
   cluster and will install your application on a cluster created by the Kubernetes
   installer.
1. Copy the command displayed and send it to your customer along with their
license file.

## Additional Resources

[How to Distribute an Application](distributing-workflow)
