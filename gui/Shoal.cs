using System;
using System.Windows.Forms;
using Gui.controllers;
using Gui.models;
using Gui.utils;

namespace Gui
{
    public partial class shoalGui : Form
    {
        private Panel currentPanel = null;
        private ButtonController buttonMod;
        private ConfigSchema changes;

        public shoalGui()
        {
            InitializeComponent();
        }

        private void shoalGui_Load(object sender, EventArgs e) 
        {
            Panel[] availablePanels = { gamePanel, raidPanel,
                                        playerPanel, botPanel,
                                        traderPanel };
            PanelButton[] buttons = { gamePanelButton, raidPanelButton,
                                      playerPanelButton, botPanelButton,
                                      traderPanelButton};
            foreach (Panel panel in availablePanels) panel.Hide();
            buttonMod = new ButtonController(buttons);
            changes = new ConfigSchema();
            changes.HeadHitpoints = 100;
        }

        private void gamePanelButton_Click(object sender, EventArgs e)
        {
            currentPanel = PanelController.AppointForePanel(currentPanel, gamePanel);
            buttonMod.PushButtonPresence(gamePanelButton);
        }

        private void raidPanelButton_Click(object sender, EventArgs e)
        {
            currentPanel = PanelController.AppointForePanel(currentPanel, raidPanel);
            buttonMod.PushButtonPresence(raidPanelButton);
        }

        private void playerPanelButton_Click(object sender, EventArgs e)
        {
            currentPanel = PanelController.AppointForePanel(currentPanel, playerPanel);
            buttonMod.PushButtonPresence(playerPanelButton);
        }

        private void botPanelButton_Click(object sender, EventArgs e)
        {
            currentPanel = PanelController.AppointForePanel(currentPanel, botPanel);
            buttonMod.PushButtonPresence(botPanelButton);
        }

        private void traderPanelButton_Click(object sender, EventArgs e)
        {
            currentPanel = PanelController.AppointForePanel(currentPanel, traderPanel);
            buttonMod.PushButtonPresence(traderPanelButton);
        }

        private void saveButton_Click(object sender, EventArgs e)
        {
            FileConstructor.writeToFile(changes);
        }
    }
}
