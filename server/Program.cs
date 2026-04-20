var builder = WebApplication.CreateBuilder(args);

// Add services
builder.Services.AddControllers();

// Step 1: Unblock the Network
builder.Services.AddCors(options => {
    options.AddDefaultPolicy(p => p.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader());
});

var app = builder.Build();

app.UseCors(); // Gatekeeper first!

app.MapControllers(); // House second.
app.Run();