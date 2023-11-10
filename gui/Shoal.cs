using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;

namespace shoalGui
{
    public partial class shoalGui : Form
    {
        private Panel currentPanel;

        public shoalGui()
        {
            InitializeComponent();

            Panel[] availablePanels = { gamePanel,
                                        raidPanel,
                                        playerPanel,
                                        botPanel,
                                        traderPanel };

            foreach (Panel panel in availablePanels)
            {
                panel.Dock = DockStyle.Fill;
                panel.Hide();
            }
        }

        private void shoalGui_Load(object sender, EventArgs e) { }

        private void traderPanel_Paint(object sender, PaintEventArgs e) { }
    }
}
