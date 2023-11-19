using Gui.models;
using Gui.utils;
using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;


namespace Gui
{
    public partial class shoalGui : Form
    {
        private Panel currentPanel;

        public shoalGui()
        {
            InitializeComponent();
        }

        private void shoalGui_Load(object sender, EventArgs e) 
        {
            Panel[] availablePanels = { gamePanel,
                                        raidPanel,
                                        playerPanel,
                                        botPanel,
                                        traderPanel };

            foreach (Panel panel in availablePanels)
            {
                panel.Hide();
            }
        }
        
        private void gamePanelButton_Click(object sender, EventArgs e)
        {
            currentPanel = PanelController.AppointForePanel(currentPanel, gamePanel);
        }

        private void raidPanelButton_Click(object sender, EventArgs e)
        {
            currentPanel = PanelController.AppointForePanel(currentPanel, raidPanel);
        }

        private void playerPanelButton_Click(object sender, EventArgs e)
        {
            currentPanel = PanelController.AppointForePanel(currentPanel, playerPanel);
        }

        private void botPanelButton_Click(object sender, EventArgs e)
        {
            currentPanel = PanelController.AppointForePanel(currentPanel, botPanel);
        }

        private void traderPanelButton_Click(object sender, EventArgs e)
        {
            currentPanel = PanelController.AppointForePanel(currentPanel, traderPanel);
        }
    }
}
