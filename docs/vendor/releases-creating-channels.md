# Creating and Editing Channels

There are three default channels that can be configured, and you can add custom channels.

The default channels are:
* **Stable**: The Stable channel is intended for production installations.
* **Unstable**: The Unstable channel is intended for internal testing.
* **Beta**: The Beta channel is intended for release candidates and early adopting customers.

For more information, see [About channels](releases-about-channels).

## Create a Channel

To create a channel:

1. From the Replicated [vendor portal](https://vendor.replicated.com), select Channels from the left menu.
1. Click **Create Channel**.

  The Create a new channel dialog opens.

  ![Create Channel](/images/channels-create.png)

1. Enter a name for the channel.
1. Optional: Enter a description of how the channel will be used.
1. Optional: To enable the semantic versioning, turn on the toggle for preventing promoting releases with an invalid version to this channel.
1. Click **Create Channel**.

## Edit a Channel

To edit an existing channel:

1. In the vendor portal, select **Channels** from the left menu.
1. Click the **edit** icon on the top right of the channel that you want to modify.

  The Edit a channel dialog opens.

  ![Edit Channel](/images/channels-edit.png)

1. Edit the fields. You can perform one or more of the following actions:

    * Change the name or description
    * Enable or disable automatically creating air gap builds
    * Enable or disable semantic versioning on the channel

1. Click **Save**.

## Next Steps

[Creating a release](releases-creating-releases)

## Additional Resources

[How to Distribute an Application](distributing-workflow)
