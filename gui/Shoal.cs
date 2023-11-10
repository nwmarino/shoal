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
        private Panel[] availablePanels;

        public shoalGui()
        {
            InitializeComponent();

            foreach (Panel panel in availablePanels)
            {
                panel.Hide();
            }
        }

        private void shoalGui_Load(object sender, EventArgs e) { }
}
