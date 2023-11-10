namespace shoalGui
{
    partial class shoalGui
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.ComponentModel.ComponentResourceManager resources = new System.ComponentModel.ComponentResourceManager(typeof(shoalGui));
            this.gamePanel = new System.Windows.Forms.Panel();
            this.raidPanel = new System.Windows.Forms.Panel();
            this.botPanel = new System.Windows.Forms.Panel();
            this.playerPanel = new System.Windows.Forms.Panel();
            this.traderPanel = new System.Windows.Forms.Panel();
            this.SuspendLayout();
            // 
            // gamePanel
            // 
            this.gamePanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.gamePanel.Location = new System.Drawing.Point(0, 0);
            this.gamePanel.Name = "gamePanel";
            this.gamePanel.Size = new System.Drawing.Size(531, 648);
            this.gamePanel.TabIndex = 0;
            // 
            // raidPanel
            // 
            this.raidPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.raidPanel.Location = new System.Drawing.Point(0, 0);
            this.raidPanel.Name = "raidPanel";
            this.raidPanel.Size = new System.Drawing.Size(531, 648);
            this.raidPanel.TabIndex = 1;
            // 
            // botPanel
            // 
            this.botPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.botPanel.Location = new System.Drawing.Point(0, 0);
            this.botPanel.Name = "botPanel";
            this.botPanel.Size = new System.Drawing.Size(531, 648);
            this.botPanel.TabIndex = 2;
            // 
            // playerPanel
            // 
            this.playerPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.playerPanel.Location = new System.Drawing.Point(0, 0);
            this.playerPanel.Name = "playerPanel";
            this.playerPanel.Size = new System.Drawing.Size(531, 648);
            this.playerPanel.TabIndex = 3;
            // 
            // traderPanel
            // 
            this.traderPanel.Dock = System.Windows.Forms.DockStyle.Fill;
            this.traderPanel.Location = new System.Drawing.Point(0, 0);
            this.traderPanel.Name = "traderPanel";
            this.traderPanel.Size = new System.Drawing.Size(531, 648);
            this.traderPanel.TabIndex = 4;
            this.traderPanel.Paint += new System.Windows.Forms.PaintEventHandler(this.traderPanel_Paint);
            // 
            // shoalGui
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 13F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.BackColor = System.Drawing.Color.FromArgb(((int)(((byte)(45)))), ((int)(((byte)(45)))), ((int)(((byte)(45)))));
            this.ClientSize = new System.Drawing.Size(531, 648);
            this.Controls.Add(this.traderPanel);
            this.Controls.Add(this.playerPanel);
            this.Controls.Add(this.botPanel);
            this.Controls.Add(this.raidPanel);
            this.Controls.Add(this.gamePanel);
            this.FormBorderStyle = System.Windows.Forms.FormBorderStyle.FixedDialog;
            this.Icon = ((System.Drawing.Icon)(resources.GetObject("$this.Icon")));
            this.MaximizeBox = false;
            this.Name = "shoalGui";
            this.SizeGripStyle = System.Windows.Forms.SizeGripStyle.Hide;
            this.Text = "shoal";
            this.Load += new System.EventHandler(this.shoalGui_Load);
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Panel gamePanel;
        private System.Windows.Forms.Panel raidPanel;
        private System.Windows.Forms.Panel botPanel;
        private System.Windows.Forms.Panel playerPanel;
        private System.Windows.Forms.Panel traderPanel;
    }
}

