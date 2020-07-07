            <form name="form" onSubmit={this.handleSubmit}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter Username" name="username" value={username} onChange={this.handleChange} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" name="password" value={password} onChange={this.handleChange} />
                </div>


                <button type="submit" className="btn btn-primary btn-block">Login</button>
                <p className="forgot-password text-right">

            </form>